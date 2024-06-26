import { Article, Notification, User } from "@prisma/client";

import { ArticleCard } from "../molecules/layout/ArticleCard";
import { Header } from "../organisms/layout/Header";
import { HomeLayout } from "../../layout/HomeLayout";
import { SideBar } from "../organisms/layout/SideBar";
import { ArticleWithUserType } from "@/types/article";

interface HomeProps {
  user: User;
  notification: Notification[];
  allArticle: ArticleWithUserType[];
}

export function Home({ user, notification, allArticle }: HomeProps) {
  return (
    <HomeLayout
      header={<Header notification={notification} user={user} />}
      leftBar={<SideBar />}
      main={allArticle.map((article) => (
        <ArticleCard
          id={article.id}
          title={article.title}
          content={article.content}
          userId={article.userId}
          createdAt={article.createdAt}
          updatedAt={article.updatedAt}
          like={article.like}
          createdUser={article.user}
        />
      ))}
      rightBar={
        <div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>
      }
    />
  );
}
