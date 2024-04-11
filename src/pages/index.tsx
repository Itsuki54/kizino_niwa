import { Header } from "@/components/organisms/Header";
import { Sidebar } from "@/components/organisms/Sidebar";
import { ChakraProvider, HStack, Spinner } from "@chakra-ui/react";
import { userMock } from "@/mock/user.mock";
import { useSession } from "next-auth/react";
import { CreateUser } from "@/components/template/CreateUser";
import { Home } from "@/components/template/Home";
import { useState } from "react";

function Kizinoniwa() {
  const [user, setUser] = useState(userMock);

  const { data: session, status } = useSession();
  if (status === "loading") return <Spinner />;
  if (status === "unauthenticated") return <CreateUser setUser={setUser} />;
  if (status === "authenticated") return <Home />;
}

export default Kizinoniwa;
