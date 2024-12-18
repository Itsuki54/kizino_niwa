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

export const ArticleQuery = async (id: string) => {
  const article = db.article.findUnique({
    where: {
      id: id,
    },
  });
  return article;
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
