import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface createProps {
  title: string;
  content: string;
  userId: string;
  tagIds: string[];
}

export async function createArticleMutation({
  title,
  content,
  userId,
  tagIds,
}: createProps) {
  const prisma = new PrismaClient();
  const newArticle = await prisma.article.create({
    data: {
      title: title,
      content: content,
      userId: userId,
      like: 0,
      TagArticle: {
        create: tagIds.map((tagId) => {
          return {
            tagId: tagId,
          };
        }),
      },
    },
  });
  return newArticle;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { title, content, userId, tagIds } = req.body;
  const newArticle = await createArticleMutation({
    title,
    content,
    userId,
    tagIds,
  });
  res.status(200).json(newArticle);
}
