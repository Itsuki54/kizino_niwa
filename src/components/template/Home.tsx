import { Article, Notification, User } from "@prisma/client";

import { ArticleCard } from "../molecules/layout/ArticleCard";
import { Header } from "../organisms/layout/Header";
import { HomeLayout } from "../organisms/layout/HomeLayout";
import { SideBar } from "../organisms/layout/SideBar";

interface HomeProps {
  user: User;
  notification: Notification[];
  allArticle: Article[];
}

export function Home({ user, notification, allArticle }: HomeProps) {
  return (
    <HomeLayout
      header={<Header notification={notification} user={user} />}
      leftBar={<SideBar />}
      main={allArticle.map((article) => (
        <ArticleCard article={article} user={user} />
      ))}
      rightBar={
        <div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>
      }
    />
  );
}
