import { InputField } from "@/components/common/InputField";

import { MarkdownEditor } from "./Editor";
import { TagSelect } from "./TagSelect";
import { useEffect } from "react";

interface ArticleContentsProps {
  setTitle: Function;
  content: string;
  title: string;
  setContent: Function;
  setTags: Function;
  tags: string;
  finished: boolean;
}

export function MakeArticleContents({
  setTitle,
  title,
  setContent,
  setTags,
  tags,
  finished,
  content,
}: ArticleContentsProps) {

  return (
    <div className="flex justify-center w-full">
      <div className="w-full flex-col">
        <div className="flex-col flex justify-center">
          <h1 className="text-3xl font-bold m-3">新しい記事の投稿</h1>
          <p className="text-m m-3">記事のタイトルとタグを入力してください</p>
          <div className="m-3">
            <InputField
              onChange={setTitle}
              placeholder="Title"
              type="text"
              value={title}
            />
            <TagSelect  setTags={setTags} />
          </div>
        </div>
        <MarkdownEditor setMarkdown={setContent} markdown={content} />
      </div>
    </div>
  );
}
