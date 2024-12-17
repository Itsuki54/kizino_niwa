import { Notification } from "@prisma/client";
import { useState } from "react";
import { FaBell } from "react-icons/fa6";

import { NotificationList } from "./NotificationList";

type NotificationButtonProps = {
  notifications: Notification[];
};

export function NotificationButton({ notifications }: NotificationButtonProps) {
  const [showNotification, setShowNotification] = useState(false);
  return (
    <button className="menu-item">
      <FaBell
        onClick={() => setShowNotification(!setShowNotification)}
        size={20}
      />
      {showNotification
        ? notifications.map(notification => (
          <NotificationList
            description={notification.description}
            image={notification.icon}
            key={notification.id}
            title={notification.title}
          />
        ))
        : null}
    </button>
  );
}
