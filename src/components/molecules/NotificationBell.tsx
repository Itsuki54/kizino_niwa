import {
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { Notifications } from "@mui/icons-material";
import Image from "next/image";
import { NotificationList } from "../atoms/NotificationList";

interface Notification {
    imageUrl: string;
    title: string;
    description: string;
}

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
            />
            <MenuList>
                {notifications.map((item, index) => (
                    <MenuItem key={index}>
                        <NotificationList
                            imageUrl={item.imageUrl}
                            title={item.title}
                            description={item.description}
                        />
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
