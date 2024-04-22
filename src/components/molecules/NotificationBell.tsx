import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Notifications } from '@mui/icons-material';
import { Notification } from '@prisma/client';
import React from 'react';

import { NotificationList } from '../atoms/NotificationList';

interface NotificationButtonProps {
  notifications: Notification[];
  children?: React.ReactNode;
}

export function NotificationButton({ notifications }: NotificationButtonProps) {
  return (
    <Menu>
      <MenuButton
        _active={{ backgroundColor: 'transparent' }}
        _hover={{ backgroundColor: 'transparent' }}
        as={IconButton}
        backgroundColor={'transparent'}
        height="32px"
        icon={<Notifications />}
        outline="none"
        width="32px"
      />
      <MenuList>
        {notifications.map((item, index) => (
          <MenuItem key={index}>
            <NotificationList
              description={item.description}
              image={item.image ? item.image : 'https://bit.ly/dan-abramov'}
              title={item.title}
            />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
