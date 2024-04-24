import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ComponentProps, FC } from 'react';

import { ToolbarPlugin } from '@/plugins/ToobarPlugin';
import { nodes } from '@/utils/nodes';

import { AutoFocusPlugin } from '../../plugins/AutoFocusPlugin';

const initialConfig: ComponentProps<typeof LexicalComposer>['initialConfig'] = {
  namespace: 'MyEditor',
  onError: (error) => console.error(error),
  nodes: nodes,
};

export const Editor: FC = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolbarPlugin />

      <div className="relative p-6 min-h-[240px]">
        <RichTextPlugin
          ErrorBoundary={() => <div>error</div>}
          contentEditable={<ContentEditable className="outline-none" />}
          placeholder={
            <div className="absolute text-gray-500 top-6 left-6 pointer-events-none user-select-none">
              いまなにしてる？
            </div>
          }
        />
      </div>
      <AutoFocusPlugin />
      <HistoryPlugin />
    </LexicalComposer>
  );
};
