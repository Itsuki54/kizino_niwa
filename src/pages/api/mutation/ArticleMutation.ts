import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface createProps {
  title: string;
  content: string;
  image: string;
  published: boolean;
  userId: string;
  userName: string;
  userImage : string;
}

export async function createArticleMutation({
  title,
  content,
  userId,
  userName,
  userImage
}: createProps) {
  const prisma = new PrismaClient();
  const newArticle = await prisma.article.create({
    data: {
      title: title,
      content: content,
      userId: userId,
      like: 0,
      userName: userName,
      userImage: userImage,
    },
  });
  return newArticle;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { title, content, image, published, userId, userName,userImage } = req.body;
  const newArticle = createArticleMutation({
    title,
    content,
    image,
    published,
    userId,
    userName,
    userImage
  });
  res.status(200).json(newArticle);
}
