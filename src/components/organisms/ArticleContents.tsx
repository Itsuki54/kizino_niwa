import { InputField } from '@atoms/InputField';

import { Tiptap } from './Tiptap';

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
    <div>
      <InputField onChange={setTitle} placeholder="Title" type="text" value={title} />
      <InputField onChange={setTags} placeholder="Tags" type="text" value={tags} />
      {/* <TextField height="500px" onChange={setContent} placeholder="Content" value={content} width="1000px" /> */}
      <main className="flex h-full min-h-screen flex-col bg-gray-200">
        <div className="m-6">
          <Tiptap />
        </div>
      </main>
    </div>
  );
}
