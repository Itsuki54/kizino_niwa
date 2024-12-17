import { db } from '@/lib/prisma';

export const NotificationQuery = async (id: string) => {
  const notification = db.notification.findMany({
    where: {
      userId: id,
    },
  });

  return notification;
};
