import { Article, User, Stock, TagArticle } from "@prisma/client";

export type ArticleWithUserType = {
  id: Article["id"];
  title: Article["title"];
  content: Article["content"];
  userId: Article["userId"];
  like: Article["like"];
  createdAt: Article["createdAt"];
  updatedAt: Article["updatedAt"];
  stocks: Stock[];
  TagArticle: TagArticle[];
  user: User;
};
