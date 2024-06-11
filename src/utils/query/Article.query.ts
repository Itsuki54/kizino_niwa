import { PrismaClient } from "@prisma/client";
import { ArticleWithUserType } from "@/types/article";

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

export async function AllArticleQuery() {
  const article = db.article.findMany();
  return article;
}

export async function TagToArticle(id: string) {
  const tag = db.tag.findUnique({
    where: {
      id: id,
    },
  });
  return tag;
}

export async function ArticleWithUser(articleId: string) {
  const articleWithUser = await db.article.findUnique({
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
  const allArticleWithUser = await db.article.findMany({
    include: {
      user: true,
      stocks: true,
      TagArticle: true,
    },
  });
  return allArticleWithUser;
}
