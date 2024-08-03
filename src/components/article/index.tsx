import { Article, User, Notification } from "@prisma/client";

import { ArticleHTML } from "./ArticleHTML";
import { Header } from "../header";
import { HomeLayout } from "../../layout/HomeLayout";
import SideBar from "../sidebar";

interface ArticleProps {
  user: User;
  article: Article;
  notification: Notification[];
  createdUser: User;
}

export function ArticlePage({
  user,
  article,
  notification,
  createdUser,
}: ArticleProps) {
  return (
    <HomeLayout
      header={<Header notification={notification} user={user} />}
      leftBar={<SideBar />}
      main={<ArticleHTML article={article} createdUser={createdUser} />}
      rightBar={
        <div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>
      }
    />
  );
}
