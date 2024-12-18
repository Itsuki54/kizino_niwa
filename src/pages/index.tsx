import {
  Notification,
  User,
} from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

import { ArticleCard } from '@/components/article/article-card';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Layout } from '@/layout/home-layout';
import { db } from '@/lib/prisma';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ArticleWithUser } from '@/types/article';
import { NotificationQuery } from '@/utils/query/notification.query';
import { UserDataQuery } from '@/utils/query/user.query';

type Props = {
  user: User | null;
  notification: Notification[] | null;
  allArticle: ArticleWithUser[];
};

const Kizinoniwa = ({ user, notification, allArticle }: Props) => {
  const { status } = useSession();

  if (status === 'loading') return null;

  return (
    <Layout
      header={<Header notification={notification} user={user} />}
      leftBar={<Sidebar />}
      main={allArticle.map(article => (
        <ArticleCard
          content={article.content}
          createdAt={article.createdAt}
          createdUser={article.user}
          id={article.id}
          key={article.id}
          like={article.like}
          tags={article.tags}
          title={article.title}
          updatedAt={article.updatedAt}
          userId={article.userId}
        />
      ))}
      rightBar={<div className='bg-gray-50 w-full h-full'>広告とか貼れそう</div>}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  let allArticle: ArticleWithUser[] = [];
  let user = null;
  let notification = null;

  try {
    const allArticleData = await db.article.findMany({
      include: {
        user: true,
        stocks: true,
      },
    });
    allArticle = JSON.parse(JSON.stringify(allArticleData));
  }
  catch (error) {
  }

  if (session) {
    try {
      const userData = await UserDataQuery(session.user.uid);
      user = JSON.parse(JSON.stringify(userData));
    }
    catch (error) {
    }

    if (user) {
      try {
        const notificationData = await NotificationQuery(user.id);
        notification = JSON.parse(JSON.stringify(notificationData));
      }
      catch (error) {
      }
    }
  }

  return {
    props: {
      user,
      notification,
      allArticle,
    },
  };
};

export default Kizinoniwa;
