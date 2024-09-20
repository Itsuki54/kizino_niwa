import {
  Article,
  Stock,
  User,
} from "@prisma/client";

export type ArticleWithUserType = {
  id: Article["id"];
  title: Article["title"];
  content: Article["content"];
  userId: Article["userId"];
  like: Article["like"];
  tags: Article["tags"];
  createdAt: Article["createdAt"];
  updatedAt: Article["updatedAt"];
  stocks: Stock[];
  user: User;
};
