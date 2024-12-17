import {
  Notification,
  User,
} from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Layout } from '@/layout/HomeLayout';
import { ArticleWithUserType } from '@/types/article';
import { AllArticleWithUser } from '@/utils/query/Article.query';
import { NotificationQuery } from '@/utils/query/Notification.query';
import { UserDataQuery } from '@/utils/query/User.query';

import { authOptions } from './api/auth/[...nextauth]';

export default function fav({
  user,
  notification,
}: {
  user: User | null;
  notification: Notification[] | null;
}) {
  return (
    <Layout
      header={<Header notification={notification} user={user} />}
      leftBar={<Sidebar />}
      main={
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl'>お気に入り</h1>
          <p>お気に入りした記事が表示されます</p>
        </div>
      }
      rightBar={undefined}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  let allArticle: ArticleWithUserType[] = [];
  try {
    const allArticleData = await AllArticleWithUser();
    allArticle = JSON.parse(JSON.stringify(allArticleData));
  }
  catch (error) {
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
