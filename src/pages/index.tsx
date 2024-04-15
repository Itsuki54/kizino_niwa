import { Home } from "@/components/template/Home";
import { UserDataQuery } from "@/components/utils/UserDataQuery";

import { userMock } from "@/mock/user.mock";
import { Spinner } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { User, getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { authOptions } from "./api/auth/[...nextauth]";

function Kizinoniwa({ user }: { user: User }) {
  const { data: session, status } = useSession();
  console.log(session);
  return <Home />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }
  const user = await UserDataQuery(userMock.id);
  return {
    props: {
      user,
    },
  };
};

export default Kizinoniwa;
