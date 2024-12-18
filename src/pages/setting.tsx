import {
  Link,
  Notification,
  User,
} from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import { Setting } from '@/components/setting';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NotificationQuery } from '@/utils/query/notification.query';
import {
  UserDataQuery,
  UserLinkQuery,
} from '@/utils/query/user.query';

type SettingProps = {
  user: User;
  link: Link[];
  notification: Notification[];
};

const SettingPage = ({ user, link, notification }: SettingProps) => <Setting link={link} notification={notification} user={user} />;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  const userData = await UserDataQuery(session.user.uid);
  const user = JSON.parse(JSON.stringify(userData));
  const linkData = await UserLinkQuery(user.id);
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

export default SettingPage;
