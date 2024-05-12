import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface createProps {
  articleId: string;
  userId: string;
}

export async function createNotificationMutation({
  articleId,
  userId,
}: createProps) {
  const prisma = new PrismaClient();
  const newNotification = await prisma.notification.create({
    data: {
      title: "いいね",
      description: "あなたの投稿がいいねされました",
      icon: "👍",
      read: false,
      userId: userId,
    },
  });
  return newNotification;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { articleId, userId } = req.body;
  const newNotification = await createNotificationMutation({
    articleId,
    userId,
  });
  res.status(200).json(newNotification);
}
