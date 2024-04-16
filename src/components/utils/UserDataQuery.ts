import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";

export async function UserDataQuery(id: string) {
  const prisma = new PrismaClient();
  const user = prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

export async function NotificationQuery(id: string) {
  const prisma = new PrismaClient();
  const notification = prisma.notification.findMany({
    where: {
      userId: id,
    },
  });

  return notification;
}
