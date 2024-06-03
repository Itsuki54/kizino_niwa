import { PrismaClient } from "@prisma/client";
import { ArticleWithUserType } from "@/types/article";
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

export async function ArticleWithUser(articleId: string) {
  const prisma = new PrismaClient();
  const articleWithUser = await prisma.article.findUnique({
    where: {
      id: articleId,
    },
    include: {
      user: true,
      stocks: true,
      TagArticle: true,
    },
  });
  return articleWithUser;
}

export async function AllArticleWithUser(): Promise<ArticleWithUserType[]> {
  const prisma = new PrismaClient();
  const allArticleWithUser = await prisma.article.findMany({
    include: {
      user: true,
      stocks: true,
      TagArticle: true,
    },
  });
  return allArticleWithUser;
}
