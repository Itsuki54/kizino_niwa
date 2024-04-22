import { ChakraProvider, HStack } from '@chakra-ui/react';
import { Article, Notification, User } from '@prisma/client';

import { Header } from '@/components/organisms/Header';
import { Sidebar } from '@/components/organisms/Sidebar';

import { HomeLayout } from '../organisms/HomeLayout';

interface HomeProps {
  user: User;
  notification: Notification[];
  article: Article[];
}

export function Home({ user, notification, article }: HomeProps) {
  return (
    <ChakraProvider>
      <HStack align="flex-start" gap="0px">
        <Sidebar />
        <HomeLayout articles={article} header={<Header notification={notification} user={user} />} />
      </HStack>
    </ChakraProvider>
  );
}
