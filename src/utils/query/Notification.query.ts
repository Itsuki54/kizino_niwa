import { db } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

export async function NotificationQuery(id: string) {
  const notification = db.notification.findMany({
    where: {
      userId: id,
    },
  });

  return notification;
}
