import {
  Article,
  Notification,
  User,
} from "@prisma/client";

import { Layout } from "../../layout/HomeLayout";
import { Header } from "../header";
import SideBar from "../sidebar";
import { ArticlePage as Page } from "./ArticlePage";

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
    <Layout
      header={<Header notification={notification} user={user} />}
      leftBar={<SideBar />}
      main={<Page article={article} createdUser={createdUser} />}
      rightBar={<div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>}
    />
  );
}
