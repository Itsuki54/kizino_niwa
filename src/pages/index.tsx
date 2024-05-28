import { Article, User, Notification } from "@prisma/client";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

import { Home } from "@/components/template/Home";

import {
  AllArticleQuery,
  UserToArticleQuery,
} from "@/utils/query/Article.query";
import { NotificationQuery } from "@/utils/query/Notification.query";
import { UserDataQuery } from "@/utils/query/User.query";

import { authOptions } from "./api/auth/[...nextauth]";

interface Props {
  user: User;
  notification: Notification[];
  allArticle: Article[];
}

function Kizinoniwa({ user, notification, allArticle }: Props) {
  const { status } = useSession();

  return (
    <>
      {status === "loading" ? null : (
        <Home allArticle={allArticle} notification={notification} user={user} />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      props: {},
      // redirect: {
      //   destination: "/api/auth/signin",
      //   permanent: false,
      // },
    };
  } else {
    const userData = await UserDataQuery(session.user.uid);
    const user = JSON.parse(JSON.stringify(userData));
    if (!user) {
      return {
        props: {},
        // redirect: {
        //   destination: "/api/auth/signin",
        //   permanent: false,
        // },
      };
    } else {
      const notificationData = await NotificationQuery(user.id);
      const notification = JSON.parse(JSON.stringify(notificationData));
      const allArticleData = await AllArticleQuery();
      const allArticle = JSON.parse(JSON.stringify(allArticleData));
      console.log(allArticle);
      return {
        props: {
          user,
          notification,
          allArticle,
        },
      };
    }
  }
};

export default Kizinoniwa;
