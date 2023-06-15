import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { priceValidationSchema } from 'validationSchema/prices';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getPrices();
    case 'POST':
      return createPrice();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPrices() {
    const data = await prisma.price
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'price'));
    return res.status(200).json(data);
  }

  async function createPrice() {
    await priceValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.price.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
