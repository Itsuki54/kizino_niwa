import { Notification } from "@prisma/client";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa6";

import { NotificationList } from "./NotificationList";

interface NotificationButtonProps {
  notifications: Notification[];
}

export function NotificationButton({ notifications }: NotificationButtonProps) {
  const [showNotification, setShowNotification] = useState(false);
  return (
    <button className="menu-item">
      <FaBell
        size={20}
        onClick={() => setShowNotification(!setShowNotification)}
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
