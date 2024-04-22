import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

interface createProps {
  title: string;
  content: string;
  image: string;
  published: boolean;
  userId: string;
}

export  async function createArticleMutation({ title, content, userId }: createProps) {
  const prisma = new PrismaClient();
  const newArticle =  await prisma.article.create({
    data: {
      title: title,
      content: content,
      userId: userId,
      like: 0,
    },
  });
  return newArticle;
}

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
  const { title, content, image, published, userId } = req.body;
  const newArticle = createArticleMutation({ title, content, image, published, userId });
  res.status(200).json(newArticle);
}