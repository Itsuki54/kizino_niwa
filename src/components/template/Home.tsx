import { Button, ChakraProvider, HStack, Spinner } from "@chakra-ui/react";
import { Notification, User } from "@prisma/client";
import { signOut } from "next-auth/react";

import { Header } from "@/components/organisms/Header";
import { Sidebar } from "@/components/organisms/Sidebar";

interface HomeProps {
  user: User;
  notification: Notification[];
}

export function Home({ user, notification }: HomeProps) {
  return (
    <ChakraProvider>
      <HStack align="flex-start" gap="0px">
        <Sidebar />
        <Header user={user} notification={notification} />
      </HStack>
    </ChakraProvider>
  );
}
