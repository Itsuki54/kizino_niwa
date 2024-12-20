import { db } from '@/lib/prisma';
import { ArticleWithUser } from '@/types/article';

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

export const AllArticleWithUserQuery = async (): Promise<ArticleWithUser[]> => {
  const allArticleWithUser = await db.article.findMany({
    include: {
      user: true,
    },
  });
  return allArticleWithUser;
};
