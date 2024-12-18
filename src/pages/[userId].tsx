import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { UserToArticleQuery } from '@/utils/query/article.query';
import { NotificationQuery } from '@/utils/query/notification.query';
import { UserDataQuery } from '@/utils/query/user.query';

const UserProfilePage = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <div>
      <h1>User Profile Page</h1>
      <p>User ID: {userId}</p>
    </div>
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
  else {
    const uid = ctx.query.userId;
    const userData = await UserDataQuery(uid as string);
    const user = JSON.parse(JSON.stringify(userData));
    if (!user) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        },
      };
    }
    else {
      const articleData = await UserToArticleQuery(user.id);
      const article = JSON.parse(JSON.stringify(articleData));
      const notificationData = await NotificationQuery(user.id);
      const notification = JSON.parse(JSON.stringify(notificationData));
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

export default UserProfilePage;
