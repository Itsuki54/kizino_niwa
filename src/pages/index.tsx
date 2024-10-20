import {
  Notification,
  User,
} from "@prisma/client";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

import { Home } from "@/components/layout/Home";

import { ArticleWithUserType } from "@/types/article";
import { AllArticleWithUser } from "@/utils/query/Article.query";
import { NotificationQuery } from "@/utils/query/Notification.query";
import { UserDataQuery } from "@/utils/query/User.query";

import { authOptions } from "./api/auth/[...nextauth]";

import { useEffect } from "react";

interface Props {
  user: User | null;
  notification: Notification[] | null;
  allArticle: ArticleWithUserType[];
}

function Kizinoniwa({ user, notification, allArticle }: Props) {
  const { status } = useSession();
  useEffect(() => {
    console.log(status, user);
  }, []);
  return (
    <>
      {status === "loading" ? null : <Home allArticle={allArticle} notification={notification} user={user} />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  console.log(session);
  let allArticle: ArticleWithUserType[] = [];
  try {
    const allArticleData = await AllArticleWithUser();
    allArticle = JSON.parse(JSON.stringify(allArticleData));
  }
  catch (error) {
    console.error(error);
  }
  if (!session) {
    return {
      props: {
        allArticle: allArticle,
      },
    };
  }
  else {
    const userData = await UserDataQuery(session.user.uid);
    const user = JSON.parse(JSON.stringify(userData));
    if (!user) {
      return {
        props: {
          allArticle: allArticle,
        },
      };
    }
    else {
      const notificationData = await NotificationQuery(user.id);
      const notification = JSON.parse(JSON.stringify(notificationData));
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
