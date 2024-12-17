import {
  Notification,
  User,
} from "@prisma/client";

import { ArticleWithUserType } from "@/types/article";

import { Layout } from "../../layout/HomeLayout";
import { ArticleCard } from "../article/ArticleCard";
import { Header } from "../header";
import { SideBar } from "../sidebar";

type HomeProps = {
  user: User | null;
  notification: Notification[] | null;
  allArticle: ArticleWithUserType[];
};

export function Home({ user, notification, allArticle }: HomeProps) {
  return (
    <Layout
      header={<Header notification={notification} user={user} />}
      leftBar={<SideBar />}
      main={allArticle.map(article => (
        <ArticleCard
          content={article.content}
          createdAt={article.createdAt}
          createdUser={article.user}
          id={article.id}
          like={article.like}
          tags={article.tags}
          title={article.title}
          updatedAt={article.updatedAt}
          userId={article.userId}
        />
      ))}
      rightBar={<div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>}
    />
  );
}
