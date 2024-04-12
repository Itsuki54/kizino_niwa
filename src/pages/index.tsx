import { Home } from "@/components/template/Home";
import { userMock } from "@/mock/user.mock";
import { Spinner } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

function Kizinoniwa() {
  const [user, setUser] = useState(userMock);
  const { data: session, status } = useSession();
  console.log("session", session);
  if (status === "loading") return <Spinner />;
  if (status === "unauthenticated") return () => signIn();
  if (status === "authenticated") return <Home />;
}

export default Kizinoniwa;
