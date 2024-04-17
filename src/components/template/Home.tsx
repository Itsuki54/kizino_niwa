import { Button, ChakraProvider, HStack, Spinner } from "@chakra-ui/react";
import { Article, Notification, User } from "@prisma/client";
import { signOut } from "next-auth/react";

import { Header } from "@/components/organisms/Header";
import { Sidebar } from "@/components/organisms/Sidebar";
import { HomeLayout } from "../organisms/HomeLayout";

interface HomeProps {
  user: User;
  notification: Notification[];
  article:Article[];
}

export function Home({ user, notification,article }: HomeProps) {
  return (
    <ChakraProvider>
      <HStack align="flex-start" gap="0px">
        <Sidebar />
        <HomeLayout
          header={<Header user={user} notification={notification} />} articles={article}
        />
      </HStack>
    </ChakraProvider>
  );
}
