import { Article, User, Notification } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

import { Home } from '@/components/template/Home';

import { UserArticleQuery } from '@/utils/query/ArticleQuery';
import { NotificationQuery } from '@/utils/query/NotificationQuery';
import { UserDataQuery } from '@/utils/query/UserQuery';

import { authOptions } from './api/auth/[...nextauth]';

interface Props {
  user: User;
  notification: Notification[];
  article: Article[];
}

function Kizinoniwa({ user, notification, article }: Props) {
  const { status } = useSession();
  console.log('USER', user);
  console.log('NOTIFICATION', notification);
  return <>{status === 'loading' ? null : <Home article={article} notification={notification} user={user} />}</>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  } else {
    const userData = await UserDataQuery(session.user.uid);
    const user = JSON.parse(JSON.stringify(userData));
    if (!user) {
      return {
        redirect: {
          destination: '/api/auth/signin',
          permanent: false,
        },
      };
    } else {
      const articleData = await UserArticleQuery(user.id);
      const article = JSON.parse(JSON.stringify(articleData));
      const notificationData = await NotificationQuery(user.id);
      const notification = JSON.parse(JSON.stringify(notificationData));
      console.log('ARTICLES', article);
      return {
        props: {
          user,
          article,
          notification,
        },
      };
    }
  }
};

export default Kizinoniwa;
