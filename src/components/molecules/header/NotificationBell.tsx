import { Notification } from "@prisma/client";
import React from "react";

import { NotificationList } from "../../atoms/layout/NotificationList";

interface NotificationButtonProps {
  notifications: Notification[];
  children?: React.ReactNode;
}

export function NotificationButton({ notifications }: NotificationButtonProps) {
  return (
    <button className="menu-item">
      {notifications.map((notification) => (
        <NotificationList
          description={notification.description}
          image={notification.icon}
          key={notification.id}
          title={notification.title}
        />
      ))}
    </button>
  );
}