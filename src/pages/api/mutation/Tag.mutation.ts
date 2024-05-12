import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export interface createProps {
  name: string;
  articleId: string;
}

export async function createTagMutation({
  name,
  articleId,
}: createProps) {
  const prisma = new PrismaClient();

  const newTag = await prisma.tag.create({
    data: {
      name: name,
      articleId: articleId,
    },
  });

  return newTag;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, articleId } = req.body;
  const newTag = await createTagMutation({
    name,
    articleId,
  });
  res.status(200).json(newTag);
}