import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface createProps {
  title: string;
  content: string;
  userId: string;
}

export async function createArticleMutation({
  title,
  content,
  userId,
}: createProps) {
  const prisma = new PrismaClient();
  const newArticle = await prisma.article.create({
    data: {
      title: title,
      content: content,
      userId: userId,
      like: 0,
    },
  });
  return newArticle;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { title, content, userId,published } = req.body;
  const newArticle = await createArticleMutation({
    title,
    content,
    userId,
  });
  res.status(200).json(newArticle);
}
