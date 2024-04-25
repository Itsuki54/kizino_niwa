import { InputField } from '@atoms/InputField';

import { Editor } from './Editor';

interface ArticleContentsProps {
  setTitle: Function;
  title: string;
  setContent: Function;
  content: string;
  setTags: Function;
  tags: string;
}

export function ArticleContents({ setTitle, title, setContent, content, setTags, tags }: ArticleContentsProps) {
  return (
    <>
      <InputField onChange={setTitle} placeholder="Title" type="text" value={title} />
      <InputField onChange={setTags} placeholder="Tags" type="text" value={tags} />
      <Editor />
    </>
  );
}
