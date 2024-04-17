import { useState } from "react";
import { GetServerSideProps } from "next";
import { userMock } from "@/mock/user.mock";
import { NotificationQuery } from "@/utils/query/NotificationQuery";
import { UserDataQuery } from "@/utils/query/UserQuery";
import { Spinner } from "@chakra-ui/react";
import { Article, Notification, User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";

import { Home } from "@/components/template/Home";
import { authOptions } from "./api/auth/[...nextauth]";
import { UserArticleQuery } from "@/utils/query/ArticleQuery";

interface Props {
  user: User;
  notification: Notification[];
  article: Article[];
}
function Kizinoniwa({ user, notification,article }: Props) {
  const { data: session, status } = useSession();
  console.log("USER", user);
  console.log("NOTIFICATION", notification);
  return (
    <div>
      {status === "loading" ? (
        <Spinner />
      ) : (
        <Home user={user} notification={notification}
        article={article}
        />
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
  const articleData = await UserArticleQuery(user.id);
  const article = JSON.parse(JSON.stringify(articleData?.articles));
  console.log("ARTICLES", article);
  return {
    props: {
      user,
      notification,
      article
    },
  };
};

export default Kizinoniwa;
