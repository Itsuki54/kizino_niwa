import { db } from '@/lib/prisma';
import { ArticleWithUserType } from '@/types/article';
export const UserToArticleQuery = async (id: string) => {
  const article = db.article.findMany({
    where: {
      userId: id,
    },
  });
  return article;
};

export const ArticleQuery = (id: string) => {
  const article = db.article.findUnique({
    where: {
      id: id,
    },
  });
  return article;
};

export const AllArticleQuery = async () => {
  const article = db.article.findMany();
  return article;
};

export const ArticleWithUser = async (articleId: string) => {
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
};

export const AllArticleWithUserQuery = async (): Promise<ArticleWithUserType[]> => {
  const allArticleWithUser = await db.article.findMany({
    include: {
      user: true,
      stocks: true,
    },
  });
  return allArticleWithUser;
};
