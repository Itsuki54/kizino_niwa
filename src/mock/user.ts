import { User, Notification } from "@prisma/client";

export const userMock: User = {
  id: "sample-user-id",
  name: "sample-user-name",
  email: "sample-user-email",
  image: "/sample-icon.png",
  admin: false,
  createdAt: new Date(),
  groupId: `sample-group-id`,
};

export const NotificationMock: Notification[] = [
  {
    id: "sample-notification-id1",
    title: "sample-notification-title1",
    description: "sample-notification-description1",
    icon: "/sample-notification-icon.png",
    read: false,
    createdAt: new Date(),
    userId: "sample-user-id",
  },
  {
    id: "sample-notification-id2",
    title: "sample-notification-title2",
    description: "sample-notification-description2",
    icon: "/sample-notification-icon.png",
    read: false,
    createdAt: new Date(),
    userId: "sample-user-id",
  },
];
