import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

interface createProps {
  title: string;
  description: string;
  image?: string;
  read: boolean;
  userId: string;
}

export async function createNotificationMutation({ title, description, image, read, userId }: createProps) {
  const prisma = new PrismaClient();
  const newNotification = await prisma.notification.create({
    data: {
      title: title,
      description: description,
      image: image,
      read: read,
      userId: userId,
    },
  });
  return newNotification;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, description, image, read, userId } = req.body;
  const newNotification = await createNotificationMutation({ title, description, image, read, userId });
  res.status(200).json(newNotification);
}
