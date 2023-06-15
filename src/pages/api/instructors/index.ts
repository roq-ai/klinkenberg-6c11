import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { instructorValidationSchema } from 'validationSchema/instructors';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getInstructors();
    case 'POST':
      return createInstructor();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getInstructors() {
    const data = await prisma.instructor
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'instructor'));
    return res.status(200).json(data);
  }

  async function createInstructor() {
    await instructorValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.calendar?.length > 0) {
      const create_calendar = body.calendar;
      body.calendar = {
        create: create_calendar,
      };
    } else {
      delete body.calendar;
    }
    const data = await prisma.instructor.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
