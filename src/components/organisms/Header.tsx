import { HStack } from "@chakra-ui/react";
import { Notification, User } from "@prisma/client";

import { notificationMock } from "../../mock/notification.mock";
import { LogoTitle } from "../molecules/LogoTitle";
import { NotificationButton } from "../molecules/NotificationBell";
import { ProfileButton } from "../molecules/ProfileButton";
import { SearchArticle } from "../molecules/SearchArticle";
import { MakeArticleButton } from "../atoms/MakeArticleButton";

interface HeaderProps {
  user: User;
  notification: Notification[];
}

export function Header({ user, notification }: HeaderProps) {
  console.log(notification);
  return (
    <HStack padding="8px" width="100%" justifyContent="space-between">
      <LogoTitle />
      <SearchArticle />
      <HStack>
        <NotificationButton notifications={notification} />
        <ProfileButton
          imageUrl={user.image!}
          name={user.name}
          userId={user.id}
        />
        <MakeArticleButton id= {user.id}/>
      </HStack>
    </HStack>
  );
}
