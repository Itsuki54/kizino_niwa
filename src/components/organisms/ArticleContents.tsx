import { InputField } from "@atoms/InputField";

import { Editor } from "./Editor";
import { Tag } from "@prisma/client";
import { TagSelect } from "../molecules/TagSelect";

interface ArticleContentsProps {
  setTitle: Function;
  title: string;
  setContent: Function;
  setTags: Function;
  tags: string;
  finished: boolean;
  tagList: Tag[];
}

export function ArticleContents({
  setTitle,
  title,
  setContent,
  setTags,
  tags,
  finished,
  tagList,
}: ArticleContentsProps) {
  return (
    <div className="flex justify-center w-4/5">
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
            <TagSelect tagList={tagList} setTags={setTags} />
          </div>
        </div>
        <Editor finished={finished} setContent={setContent} />
      </div>
    </div>
  );
}
