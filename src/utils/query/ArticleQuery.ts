
import { PrismaClient, User } from "@prisma/client";

export async function UserArticleQuery(id: string) {
  const prisma = new PrismaClient();
  const user = prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      articles: true,
    },
  });
  return user;
}

