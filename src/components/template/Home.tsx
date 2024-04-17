import { Header } from "@/components/organisms/Header";
import { Sidebar } from "@/components/organisms/Sidebar";
import { Button, ChakraProvider, HStack, Spinner } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { User, Notification } from "@prisma/client";

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
