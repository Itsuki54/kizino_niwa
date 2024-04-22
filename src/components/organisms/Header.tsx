import { HStack } from '@chakra-ui/react';
import { Notification, User } from '@prisma/client';

import { MakeArticleButton } from '../atoms/MakeArticleButton';
import { LogoTitle } from '../molecules/LogoTitle';
import { NotificationButton } from '../molecules/NotificationBell';
import { ProfileButton } from '../molecules/ProfileButton';
import { SearchArticle } from '../molecules/SearchArticle';

interface HeaderProps {
  user: User;
  notification: Notification[];
}

export function Header({ user, notification }: HeaderProps) {
  console.log(notification);
  return (
    <HStack justifyContent="space-between" padding="8px" width="100%">
      <LogoTitle />
      <SearchArticle />
      <HStack>
        <NotificationButton notifications={notification} />
        <ProfileButton imageUrl={user.image!} name={user.name} userId={user.id} />
        <MakeArticleButton id={user.id} />
      </HStack>
    </HStack>
  );
}
