import { Prisma } from '@prisma/client';

export type ArticleWithUser = Prisma.ArticleGetPayload<{
  include: {
    user: true;
  };
}>;

export type ArticleWithUserLikesStocks = Prisma.ArticleGetPayload<{
  include: {
    user: true;
    likes: true;
    stocks: true;
  };
}>;

export type UserWithArticles = Prisma.UserGetPayload<{
  include: {
    articles: true;
  };
}>;

export type UserWithAllRelations = Prisma.UserGetPayload<{
  include: {
    articles: true;
    likes: true;
    stocks: true;
    notifications: true;
    link: true;
  };
}>;
