import { PrismaClient } from '@prisma/client';

export async function UserDataQuery(id: string) {
  const prisma = new PrismaClient();
  const user = prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}
