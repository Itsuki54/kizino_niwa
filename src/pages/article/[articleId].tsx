import {
  Article,
  User,
} from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import { ArticlePage } from '@/components/article';
import { userMock } from '@/mock/user';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ArticleQuery } from '@/utils/query/article.query';
import { UserDataQuery } from '@/utils/query/user.query';

type props = {
  user: User;
  article: Article;
  createdUser: User;
};

const articleIdPage = ({
  user,
  article,
  createdUser,
}: props) => {
  return (
    <ArticlePage
      article={article}
      createdUser={createdUser}
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
          article,
          createdUser,
        },
      };
    }
    else {
      const userData = await UserDataQuery(session.user.uid);
      const user = JSON.parse(JSON.stringify(userData));
      return {
        props: {
          user,
          article,
          createdUser,
        },
      };
    }
  }
};

export default articleIdPage;
