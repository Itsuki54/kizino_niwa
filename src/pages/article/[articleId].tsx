import { User, Notification, Article } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import { ArticlePage } from '@/components/template/Article';

import { ArticleQuery } from '@/utils/query/ArticleQuery';
import { NotificationQuery } from '@/utils/query/NotificationQuery';
import { UserDataQuery } from '@/utils/query/UserQuery';

import { authOptions } from '../api/auth/[...nextauth]';

interface props {
  user: User;
  notification: Notification[];
  article: Article;
}

export default function articleIdPage({ user, notification, article }: props) {
  return <ArticlePage article={article} notification={notification} user={user} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { articleId } = ctx.query;
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  const userData = await UserDataQuery(session.user.uid);
  const user = JSON.parse(JSON.stringify(userData));
  const notificationData = await NotificationQuery(user.id);
  const notification = JSON.parse(JSON.stringify(notificationData));
  const articleData = await ArticleQuery(articleId as string);
  const article = JSON.parse(JSON.stringify(articleData));
  return {
    props: {
      user,
      notification,
      article,
    },
  };
};
