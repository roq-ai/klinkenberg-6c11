import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { schoolValidationSchema } from 'validationSchema/schools';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getSchools();
    case 'POST':
      return createSchool();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSchools() {
    const data = await prisma.school
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'school'));
    return res.status(200).json(data);
  }

  async function createSchool() {
    await schoolValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.instructor?.length > 0) {
      const create_instructor = body.instructor;
      body.instructor = {
        create: create_instructor,
      };
    } else {
      delete body.instructor;
    }
    if (body?.price?.length > 0) {
      const create_price = body.price;
      body.price = {
        create: create_price,
      };
    } else {
      delete body.price;
    }
    const data = await prisma.school.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
