/* eslint-disable react-hooks/rules-of-hooks */
import {
  Notification,
  User,
} from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getServerSession } from 'next-auth';

import { MakeArticle } from '@/components/make-article';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NotificationQuery } from '@/utils/query/notification.query';
import { UserDataQuery } from '@/utils/query/user.query';

type props = {
  user: User;
  notification: Notification[];
};

const newArticle = ({ user, notification }: props) => {
  const { userId } = useRouter().query;
  return (
    <MakeArticle
      notification={notification}
      user={user}
      userId={userId as string}
    />
  );
};

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
  const notificationData = await NotificationQuery(user.id);
  const notification = JSON.parse(JSON.stringify(notificationData));
  return {
    props: {
      user,
      notification,
    },
  };
};

export default newArticle;
