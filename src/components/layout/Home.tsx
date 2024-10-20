import {
  Article,
  Notification,
  User,
} from "@prisma/client";

import { ArticleWithUserType } from "@/types/article";
import { Layout } from "../../layout/HomeLayout";
import { ArticleCard } from "../article/ArticleCard";
import { Header } from "../header";
import { SideBar } from "../sidebar";

interface HomeProps {
  user: User | null;
  notification: Notification[] | null;
  allArticle: ArticleWithUserType[];
}

export function Home({ user, notification, allArticle }: HomeProps) {
  return (
    <Layout
      header={<Header notification={notification} user={user} />}
      leftBar={<SideBar />}
      main={allArticle.map(article => (
        <ArticleCard
          id={article.id}
          title={article.title}
          content={article.content}
          userId={article.userId}
          createdAt={article.createdAt}
          updatedAt={article.updatedAt}
          like={article.like}
          tags={article.tags}
          createdUser={article.user}
        />
      ))}
      rightBar={<div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>}
    />
  );
}
