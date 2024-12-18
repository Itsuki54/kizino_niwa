import {
  Article,
  Notification,
  User,
} from '@prisma/client';

import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Layout } from '@/layout/home-layout';

import { ArticlePage as Page } from './article-page';

type ArticleProps = {
  user: User;
  article: Article;
  notification: Notification[];
  createdUser: User;
};

export const ArticlePage = ({
  user,
  article,
  notification,
  createdUser,
}: ArticleProps) => {
  return (
    <Layout
      header={<Header notification={notification} user={user} />}
      leftBar={<Sidebar />}
      main={<Page article={article} createdUser={createdUser} />}
      rightBar={<div className='bg-gray-50 w-full h-full'>広告とか貼れそう</div>}
    />
  );
};
