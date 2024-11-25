import { ArticleWithUserType } from "@/types/article";
import { PrismaClient } from "@prisma/client";

import { db } from "@/lib/prisma";
export async function UserToArticleQuery(id: string) {
  const article = db.article.findMany({
    where: {
      userId: id,
    },
  });
  return article;
}

export async function ArticleQuery(id: string) {
  const article = db.article.findUnique({
    where: {
      id: id,
    },
  });
  return article;
}

async function AllArticleQuery() {
  const article = db.article.findMany();
  return article;
}

async function ArticleWithUser(articleId: string) {
  const articleWithUser = await db.article.findUnique({
    where: {
      id: articleId,
    },
    include: {
      user: true,
      stocks: true,
    },
  });
  return articleWithUser;
}

export async function AllArticleWithUser(): Promise<ArticleWithUserType[]> {
  const allArticleWithUser = await db.article.findMany({
    include: {
      user: true,
      stocks: true,
    },
  });
  return allArticleWithUser;
}
