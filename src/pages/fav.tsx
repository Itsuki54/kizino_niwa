import {
  Notification,
  User,
} from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Layout } from '@/layout/home-layout';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ArticleWithUserType } from '@/types/article';
import { AllArticleWithUserQuery } from '@/utils/query/article.query';
import { NotificationQuery } from '@/utils/query/notification.query';
import { UserDataQuery } from '@/utils/query/user.query';

const fav = ({
  user,
  notification,
}: {
  user: User | null;
  notification: Notification[] | null;
}) => {
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
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  let allArticle: ArticleWithUserType[] = [];
  try {
    const allArticleData = await AllArticleWithUserQuery();
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

export default fav;
