import { Header } from "@/components/organisms/Header";
import { Sidebar } from "@/components/organisms/Sidebar";
import { Button, ChakraProvider, HStack, Spinner } from "@chakra-ui/react";
import { userMock } from "@/mock/user.mock";
import { signOut } from "next-auth/react";

export function Home() {
  return (
    <ChakraProvider>
      <HStack align="flex-start" gap="0px">
        <Sidebar />
        <Header user={userMock} />
        <Button onClick={() => signOut()}>Hello, World!</Button>
      </HStack>
    </ChakraProvider>
  );
}
