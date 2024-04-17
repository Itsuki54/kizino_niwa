import Image from "next/image";
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Notifications } from "@mui/icons-material";
import { Notification } from "@prisma/client";

import { NotificationList } from "../atoms/NotificationList";

interface NotificationButtonProps {
  notifications: Notification[];
  children?: React.ReactNode;
}

export function NotificationButton({ notifications }: NotificationButtonProps) {
  return (
    <Menu>
      <MenuButton
        width="32px"
        height="32px"
        as={IconButton}
        icon={<Notifications />}
        outline="none"
        backgroundColor={"transparent"}
        _hover={{ backgroundColor: "transparent" }}
        _active={{ backgroundColor: "transparent" }}
      />
      <MenuList>
        {notifications.map((item, index) => (
          <MenuItem key={index}>
            <NotificationList
              image={item.image ? item.image : "https://bit.ly/dan-abramov"}
              title={item.title}
              description={item.description}
            />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
