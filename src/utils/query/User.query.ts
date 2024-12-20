import { db } from '@/lib/prisma';

export const UserDataQuery = async (id: string) => {
  const user = db.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
};
