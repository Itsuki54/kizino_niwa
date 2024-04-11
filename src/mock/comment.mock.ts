import { Comment } from "@prisma/client";

export const commentMock: Comment = {
  id: "1",
  content: "Mock Comment",
  createdAt: new Date(),
  userId: "1",
  articleId: "1",
};
