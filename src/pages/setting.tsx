import { Setting } from "@/components/setting";
import { NotificationQuery } from "@/utils/query/Notification.query";
import { UserDataQuery } from "@/utils/query/User.query";
import { UserToLinkQuery } from "@/utils/query/User.query";
import {
  Link,
  Notification,
  User,
} from "@prisma/client";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export interface SettingProps {
  user: User;
  link: Link[];
  notification: Notification[];
}

export default function setting({ user, link, notification }: SettingProps) {
  return <Setting user={user} link={link} notification={notification} />;
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const userData = await UserDataQuery(session.user.uid);
  const user = JSON.parse(JSON.stringify(userData));
  const linkData = await UserToLinkQuery(user.id);
  const link = JSON.parse(JSON.stringify(linkData));
  const notificationData = await NotificationQuery(user.id);
  const notification = JSON.parse(JSON.stringify(notificationData));
  return {
    props: {
      user,
      link,
      notification,
    },
  };
};
