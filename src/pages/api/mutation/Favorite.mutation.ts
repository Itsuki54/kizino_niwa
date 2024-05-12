import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface createProps {
  userId: string;
  tagId : string;
}

export async function createFavoriteMutation({
  userId,
  tagId,
}: createProps) {
  const prisma = new PrismaClient();

  const newFavorite = await prisma.favorite.create({
    data: {
      userId: userId,
      tagId: tagId,
    },
  });

  return newFavorite;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId, tagId } = req.body;
  const newFavorite = await createFavoriteMutation({
    userId,
    tagId,
  });
  res.status(200).json(newFavorite);
}