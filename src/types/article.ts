import { Prisma } from '@prisma/client';

export type ArticleWithUser = Prisma.ArticleGetPayload<{
  include: {
    user: true;
  };
}>;

export type UserWithArticles = Prisma.UserGetPayload<{
  include: {
    articles: true;
  };
}>;
