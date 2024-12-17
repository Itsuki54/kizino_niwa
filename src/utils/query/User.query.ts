import { db } from '@/lib/prisma';

export const UserDataQuery = async (id: string) => {
  const user = db.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
};

export const UserLinkQuery = async (id: string) => {
  const link = db.link.findMany({
    where: {
      userId: id,
    },
  });

  return link;
};
