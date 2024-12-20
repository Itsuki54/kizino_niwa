import { User } from '@prisma/client';
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
import { UserDataQuery } from '@/utils/query/user.query';

type Props = {
  user: User | null;
  allArticle: ArticleWithUser[];
};

const Kizinoniwa = ({ user, allArticle }: Props) => {
  const { status } = useSession();

  if (status === 'loading') return null;

  return (
    <Layout
      header={<Header user={user} />}
      leftBar={<Sidebar />}
      main={allArticle.map(article => (
        <ArticleCard
          key={article.id}
          props={article}
        />
      ))}
      rightBar={<div className='bg-gray-50 w-full h-full'>広告とか貼れそう</div>}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { req, res } = ctx;
  const session = await getServerSession(req, res, authOptions);

  try {
    const [allArticleData, userData] = await Promise.all([
      db.article.findMany({
        include: {
          user: true,
        },
      }),
      session ? UserDataQuery(session.user.uid) : null,
    ]);

    return {
      props: {
        allArticle: JSON.parse(JSON.stringify(allArticleData)) || [],
        user: userData ? JSON.parse(JSON.stringify(userData)) : null,
      },
    };
  }
  catch (error) {
    return {
      props: {
        allArticle: [],
        user: null,
      },
    };
  }
};

export default Kizinoniwa;
