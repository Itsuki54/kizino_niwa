import { Article, User } from "@prisma/client";
import parse from "html-react-parser";

import { Divider } from "../../atoms/common/Divider";
import { ProfileButton } from "../../molecules/header/ProfileButton";

interface ArticleHTMLProps {
  article: Article;
  user: User;
  createdUser: User;
}

export function ArticleHTML({ article, createdUser }: ArticleHTMLProps) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl">{article.title}</div>
        <ProfileButton
          imageUrl={createdUser.image!}
          name={createdUser.name}
          userId={createdUser.id}
        />
      </div>
      <Divider />
      <div>{parse(article.content)}</div>
    </div>
  );
}
