import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface createProps {
  userId: string;
  articleId: string;
  name: string;
}

export async function createStockMutation({
  userId,
  articleId,
  name,
}: createProps) {
  const prisma = new PrismaClient();

  const newStock = await prisma.stock.create({
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