import { Article, User, Notification } from '@prisma/client';

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
      main={
        <div className="flex-col flex bg-primary-100 border m-2 rounded-md">
          <div className="text-xl">{article.title}</div>
          <div>{article.like}</div>
          <div>{article.userName}</div>
        </div>
      }
      rightBar={<div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>}
    />
  );
}
