import {
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Box,
    Text,
} from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { NotificationButton } from "../molecules/NotificationBell";
import { ProfileButton } from "../molecules/ProfileButton";
import { UserType } from "@/types/UserType";
import { LogoTitle } from "../molecules/LogoTitle";
import { SearchArticle } from "../molecules/SearchArticle";

export function Header({ user }: { user: UserType }) {
    return (
        <HStack padding="8px" width="100%" justifyContent="space-between">
            <LogoTitle />
            <SearchArticle />
            <HStack>
                <NotificationButton notifications={user.notifications} />
                <ProfileButton
                    imageUrl={user.iconUrl}
                    name="Profile"
                    userId={user.id}
                />
            </HStack>
        </HStack>
    );
}
1;
