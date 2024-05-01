import { Article, User, Notification } from "@prisma/client";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

import { Home } from "@/components/template/Home";

import { AllArticleQuery, UserArticleQuery } from "@/utils/query/ArticleQuery";
import { NotificationQuery } from "@/utils/query/NotificationQuery";
import { UserDataQuery } from "@/utils/query/UserQuery";

import { authOptions } from "./api/auth/[...nextauth]";

interface Props {
  user: User;
  notification: Notification[];
  article: Article[];
  allArticle: Article[];
}

function Kizinoniwa({ user, notification, article, allArticle }: Props) {
  const { status } = useSession();
  return (
    <>
      {status === "loading" ? null : (
        <Home
          allArticle={allArticle}
          article={article}
          notification={notification}
          user={user}
        />
      )}
    </>
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
  } else {
    const userData = await UserDataQuery(session.user.uid);
    const user = JSON.parse(JSON.stringify(userData));
    if (!user) {
      return {
        redirect: {
          destination: "/api/auth/signin",
          permanent: false,
        },
      };
    } else {
      const articleData = await UserArticleQuery(user.id);
      const article = JSON.parse(JSON.stringify(articleData));
      const notificationData = await NotificationQuery(user.id);
      const notification = JSON.parse(JSON.stringify(notificationData));
      const allArticleData = await AllArticleQuery();
      const allArticle = JSON.parse(JSON.stringify(allArticleData));
      return {
        props: {
          user,
          article,
          notification,
          allArticle,
        },
      };
    }
  }
};

export default Kizinoniwa;
