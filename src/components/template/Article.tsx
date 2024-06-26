import { Article, User, Notification } from "@prisma/client";

import { ArticleHTML } from "../organisms/layout/ArticleContents";
import { Header } from "../organisms/layout/Header";
import { HomeLayout } from "../../layout/HomeLayout";
import SideBar from "../organisms/layout/SideBar";

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
