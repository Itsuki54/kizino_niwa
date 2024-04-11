import { Article } from "@prisma/client";

export const articleMock: Article = {
  id: "1",
  title: "Mock Article",
  content: "This is a mock article.",
  image: "/images/anonyms.png",
  published: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "1",
  tagId: "1",
  bookmarkId: "1",
  like: 0,
};
