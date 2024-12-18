import {
  Article,
  Notification,
  User,
} from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import { ArticlePage } from '@/components/article';
import {
  NotificationMock,
  userMock,
} from '@/mock/user';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ArticleQuery } from '@/utils/query/Article.query';
import { NotificationQuery } from '@/utils/query/Notification.query';
import { UserDataQuery } from '@/utils/query/User.query';

type props = {
  user: User;
  notification: Notification[];
  article: Article;
  createdUser: User;
};

const articleIdPage = ({
  user,
  notification,
  article,
  createdUser,
}: props) => {
  return (
    <ArticlePage
      article={article}
      createdUser={createdUser}
      notification={notification}
      user={user}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { articleId } = ctx.query;
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const articleData = await ArticleQuery(articleId as string);
  const article = JSON.parse(JSON.stringify(articleData));
  const createdUserData = await UserDataQuery(article.userId);
  const createdUser = JSON.parse(JSON.stringify(createdUserData));
  if (!session) {
    return {
      props: {
        user: JSON.parse(JSON.stringify(userMock)),
        notification: JSON.parse(JSON.stringify(NotificationMock)),
        article,
        createdUser,
      },
    };
  }
  else {
    const userData = await UserDataQuery(session.user.uid);
    const user = JSON.parse(JSON.stringify(userData));
    if (!user) {
      return {
        props: {
          user: JSON.parse(JSON.stringify(userMock)),
          notification: JSON.parse(JSON.stringify(NotificationMock)),
          article,
          createdUser,
        },
      };
    }
    else {
      const userData = await UserDataQuery(session.user.uid);
      const user = JSON.parse(JSON.stringify(userData));
      const notificationData = await NotificationQuery(user.id);
      const notification = JSON.parse(JSON.stringify(notificationData));
      return {
        props: {
          user,
          notification,
          article,
          createdUser,
        },
      };
    }
  }
};

export default articleIdPage;
