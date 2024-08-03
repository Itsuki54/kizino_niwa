import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/prisma";
interface createProps {
  title: string;
  content: string;
  userId: string;
  tags:string;
}

export async function createArticleMutation({
  title,
  content,
  userId,
  tags
}: createProps) {
  const newArticle = await db.article.create({
    data: {
      title: title,
      content: content,
      userId: userId,
      tags: tags,
      like: 0,
    },
  });
  return newArticle;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { title, content, userId, tags} = req.body;
  const newArticle = await createArticleMutation({
    title,
    content,
    userId,
    tags,});
  res.status(200).json(newArticle);
}
