import { InputField } from '@atoms/InputField';
import { TextField } from '@atoms/TextField';

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
    <div className=" mx-auto flex flex-col">
      <InputField onChange={setTitle} placeholder="Title" type="text" value={title}  />
      <InputField onChange={setTags} placeholder="Tags" type="text" value={tags}  />
      <TextField height="500px" onChange={setContent} placeholder="Content" value={content} width="1000px" />
    </div>
  );
}
