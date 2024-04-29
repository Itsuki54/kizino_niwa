import { Article, User, Notification } from '@prisma/client';

import { ArticleHTML } from '../organisms/ArticleHTML';
import { Header } from '../organisms/Header';
import { HomeLayout } from '../organisms/HomeLayout';
import SideBar from '../organisms/SideBar';

interface ArticleProps {
  user: User;
  article: Article;
  notification: Notification[];
}

export function ArticlePage({ user, article, notification }: ArticleProps) {
  return (
    <HomeLayout
      header={<Header notification={notification} user={user} />}
      leftBar={<SideBar />}
      main={<ArticleHTML article={article} user={user} />}
      rightBar={<div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>}
    />
  );
}