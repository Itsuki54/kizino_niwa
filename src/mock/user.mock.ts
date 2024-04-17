import { User } from "@prisma/client";

export const userMock: User = {
  id: "1",
  name: "Mock User",
  email: "sample",
  image: "/images/anonyms.png",
  admin: false,
  createdAt: new Date(),
};
