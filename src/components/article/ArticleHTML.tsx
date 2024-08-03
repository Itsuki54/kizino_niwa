import { Article, User } from "@prisma/client";

import { Divider } from "../common/Divider";
import { ProfileButton } from "../header/ProfileButton";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

interface ArticleHTMLProps {
  article: Article;
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
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeKatex]}
        className="markdown-body"
      >
        {article.content}
      </ReactMarkdown>
    </div>
  );
}
