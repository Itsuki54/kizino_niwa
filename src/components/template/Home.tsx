import { Article, Notification, User } from '@prisma/client';

import { ArticleCard } from '../molecules/ArticleCard';
import { Header } from '../organisms/Header';
import { HomeLayout } from '../organisms/HomeLayout';
import { SideBar } from '../organisms/SideBar';

interface HomeProps {
  user: User;
  notification: Notification[];
  article: Article[];
  allArticle: Article[];
}

export function Home({ user, notification, article ,allArticle}: HomeProps) {
  return (
    <HomeLayout
      header={<Header notification={notification} user={user} />}
      leftBar={<SideBar />}
      main={allArticle.map((article) => (
        <ArticleCard
          articleId={article.id}
          content={article.content}
          key={article.id}
          like={article.like}
          title={article.title}
          user={user}
          userName={article.userName}
        />
      ))}
      rightBar={<div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>}
    />
  );
}
