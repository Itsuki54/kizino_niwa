import { db } from "@/lib/prisma";

export async function NotificationQuery(id: string) {
  const notification = db.notification.findMany({
    where: {
      userId: id,
    },
  });

  return notification;
}
