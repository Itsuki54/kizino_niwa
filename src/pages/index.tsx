import { useState } from "react";
import { GetServerSideProps } from "next";
import { userMock } from "@/mock/user.mock";
import { Spinner } from "@chakra-ui/react";
import { Notification, User } from "@prisma/client";
import { NotificationQuery } from "@query/NotificationDataQuery";
import { UserDataQuery } from "@query/UserDataQuery";
import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";

import { Home } from "@/components/template/Home";
import { authOptions } from "./api/auth/[...nextauth]";

interface Props {
  user: User;
  notification: Notification[];
}
function Kizinoniwa({ user, notification }: Props) {
  const { data: session, status } = useSession();
  console.log("USER", user);
  console.log("NOTIFICATION", notification);
  return (
    <div>
      {status === "loading" ? (
        <Spinner />
      ) : (
        <Home user={user} notification={notification} />
      )}
    </div>
  );
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

  const userData = await UserDataQuery(session.user.uid);
  const user = JSON.parse(JSON.stringify(userData));
  const notificationData = await NotificationQuery(user.id);
  const notification = JSON.parse(JSON.stringify(notificationData));
  console.log();
  return {
    props: {
      user,
      notification,
    },
  };
};

export default Kizinoniwa;
