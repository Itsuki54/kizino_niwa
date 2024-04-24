import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FC, useEffect } from 'react';

export const AutoFocusPlugin: FC = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus();
  }, [editor]);

  return null;
};
