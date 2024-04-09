import { User } from "@prisma/client";

export const userMock: User = {
    id: "1",
    name: "Mock User",
    email: "sample",
    icon: "https://bit.ly/dan-abramov",
    admin: false,
    createdAt: new Date(),
};
