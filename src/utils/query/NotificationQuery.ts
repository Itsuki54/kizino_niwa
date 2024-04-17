import { PrismaClient, User } from "@prisma/client";

export async function NotificationQuery(id: string) {
  const prisma = new PrismaClient();
  const notification = prisma.notification.findMany({
    where: {
      userId: id,
    },
  });

  return notification;
}
