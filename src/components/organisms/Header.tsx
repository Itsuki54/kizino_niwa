import { HStack } from "@chakra-ui/react";
import { User } from "@prisma/client";
import { LogoTitle } from "../molecules/LogoTitle";
import { NotificationButton } from "../molecules/NotificationBell";
import { ProfileButton } from "../molecules/ProfileButton";
import { SearchArticle } from "../molecules/SearchArticle";
import { notificationMock } from "../../mock/notification.mock";
export function Header({ user }: { user: User }) {
  return (
    <HStack padding="8px" width="100%" justifyContent="space-between">
      <LogoTitle />
      <SearchArticle />
      <HStack>
        <NotificationButton notifications={notificationMock} />
        <ProfileButton imageUrl={user.image!} name="Profile" userId={user.id} />
      </HStack>
    </HStack>
  );
}
