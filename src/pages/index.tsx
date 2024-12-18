import {
  Notification,
  User,
} from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

import { Home } from '@/components/layout/home';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ArticleWithUserType } from '@/types/article';
import { AllArticleWithUserQuery } from '@/utils/query/article.query';
import { NotificationQuery } from '@/utils/query/notification.query';
import { UserDataQuery } from '@/utils/query/user.query';

type Props = {
  user: User | null;
  notification: Notification[] | null;
  allArticle: ArticleWithUserType[];
};

const Kizinoniwa = ({ user, notification, allArticle }: Props) => {
  const { status } = useSession();

  return (
    <>
      {status === 'loading' ? null : <Home allArticle={allArticle} notification={notification} user={user} />}
    </>
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

export default Kizinoniwa;
