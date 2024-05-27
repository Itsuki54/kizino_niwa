import { Editor } from "@tiptap/react";
import { FC, useCallback } from "react";

type HeadingButtonProps = {
  editor: Editor | null;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const HeadingButton: FC<HeadingButtonProps> = ({ editor, level }) => {
  const onClick = useCallback(() => {
    editor?.chain().focus().toggleHeading({ level: level }).run();
  }, [editor, level]);

  return <button onClick={() => onClick()}>H{level}</button>;
};
