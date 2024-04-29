import { PrismaClient } from '@prisma/client';

export async function UserArticleQuery(id: string) {
  const prisma = new PrismaClient();
  const article = prisma.article.findMany({
    where: {
      userId: id,
    },
  });
  return article;
}

export async function ArticleQuery(id: string) {
  const prisma = new PrismaClient();
  const article = prisma.article.findUnique({
    where: {
      id: id,
    },
  });
  return article;
}
