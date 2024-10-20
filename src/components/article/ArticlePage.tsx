import {
  Article,
  User,
} from "@prisma/client";

import { binaryToTags } from "@/utils/binary";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { Divider } from "../common/Divider";
import { ProfileButton } from "../header/ProfileButton";

interface ArticlePageProps {
  article: Article;
  createdUser: User;
}

export function ArticlePage({ article, createdUser }: ArticlePageProps) {
  const tags = binaryToTags(article.tags);
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
      <div>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <div key={index} className="bg-gray-200 rounded p-1">
              {tag}
            </div>
          ))}
        </div>
      </div>
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
