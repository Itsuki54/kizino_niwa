import { Notification } from '@prisma/client';
import { useState } from 'react';
import { FaBell } from 'react-icons/fa6';

import { NotificationList } from './NotificationList';

type NotificationButtonProps = {
  notifications: Notification[];
};

export const NotificationButton = ({ notifications }: NotificationButtonProps) => {
  const [isShowNotification, setIsShowNotification] = useState(false);
  return (
    <button className='menu-item'>
      <FaBell
        onClick={() => setIsShowNotification(!setIsShowNotification)}
        size={20}
      />
      {isShowNotification
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
};
