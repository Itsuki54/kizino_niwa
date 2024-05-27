import { PrismaClient } from "@prisma/client";

export async function UserToArticleQuery(id: string) {
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

export async function AllArticleQuery() {
  const prisma = new PrismaClient();
  const article = prisma.article.findMany();
  return article;
}

export async function TagToArticle(id: string) {
  const prisma = new PrismaClient();
  const tag = prisma.tag.findUnique({
    where: {
      id: id,
    },
  });
  return tag;
}
