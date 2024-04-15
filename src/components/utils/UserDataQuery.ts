import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";

export function UserDataQuery(id: string) {
  const prisma = new PrismaClient();
  return prisma.user.findMany({
    where: {
      id: id,
    },
  });
}
