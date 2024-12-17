import {
  Article,
  Notification,
  User,
} from "@prisma/client";

import { Layout } from "../../layout/HomeLayout";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { ArticlePage as Page } from "./ArticlePage";

type ArticleProps = {
  user: User;
  article: Article;
  notification: Notification[];
  createdUser: User;
};

export const ArticlePage = ({
  user,
  article,
  notification,
  createdUser,
}: ArticleProps) => {
  return (
    <Layout
      header={<Header notification={notification} user={user} />}
      leftBar={<Sidebar />}
      main={<Page article={article} createdUser={createdUser} />}
      rightBar={<div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>}
    />
  );
};
