import { Article, Notification, User } from '@prisma/client';

import { Sidebar } from '@/components/organisms/Sidebar';

import { ArticleCard } from '../molecules/ArticleCard';
import { Header } from '../organisms/Header';

interface HomeProps {
  user: User;
  notification: Notification[];
  article: Article[];
}

export function Home({ user, notification, article }: HomeProps) {
  return (
    <div className="flex backdrop-grayscale-0 w-full overflow-hidden">
      <div className="overflow-hidden">
        <Sidebar />
      </div>
      <div className="flex backdrop-grayscale-0 w-full">
        <div className="flex flex-col w-full">
          <div>
            <Header notification={notification} user={user} />
          </div>
          <div className="bg-gray-50">
            <div className="flex-col overflow-y-scroll">
              {article.map((article) => (
                <ArticleCard
                  articleId={article.id}
                  content={article.content}
                  key={article.id}
                  like={article.like}
                  title={article.title}
                  userName={article.userName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
