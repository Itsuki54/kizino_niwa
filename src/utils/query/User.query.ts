import { PrismaClient } from "@prisma/client";

export async function UserDataQuery(id: string) {
  const prisma = new PrismaClient();
  const user = prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

export async function UserToLinkQuery(id: string) {
  const prisma = new PrismaClient();
  const link = prisma.link.findMany({
    where: {
      userId: id,
    },
  });

  return link;
}
