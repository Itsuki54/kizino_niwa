import { Notification } from "@prisma/client";

export const notificationMock: Notification[] = [
    {
        id: "1",
        title: "Sample Notification",
        description: "This is a sample notification",
        image: "https://bit.ly/dan-abramov",
        read: false,
        createdAt: new Date(),
        userId: "1",
    },
    {
        id: "2",
        title: "Sample Notification 2",
        description: "This is a sample notification 2",
        image: "https://bit.ly/dan-abramov",
        read: false,
        createdAt: new Date(),
        userId: "1",
    },
];
