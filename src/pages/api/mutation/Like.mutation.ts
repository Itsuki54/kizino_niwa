import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/prisma";

interface createProps {
  articleId: string;
  userId: string;
}

export async function createLikeMutation({ articleId, userId }: createProps) {
  const newLike = await db.like.create({
    data: {
      articleId: articleId,
      userId: userId,
    },
  });

  return newLike;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { articleId, userId } = req.body;
  const newLike = await createLikeMutation({
    articleId,
    userId,
  });
  res.status(200).json(newLike);
}
