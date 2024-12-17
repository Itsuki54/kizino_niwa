import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

type createProps = {
  userId: string;
  articleId: string;
  name: string;
};

import { db } from '@/lib/prisma';

export async function createStockMutation({
  userId,
  articleId,
  name,
}: createProps) {
  const newStock = await db.stock.create({
    data: {
      userId: userId,
      articleId: articleId,
      name: name,
    },
  });

  return newStock;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId, articleId, name } = req.body;
  const newStock = await createStockMutation({
    userId,
    articleId,
    name,
  });
  res.status(200).json(newStock);
}
