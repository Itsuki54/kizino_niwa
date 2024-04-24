import { FC, useState } from 'react';
import { TbH1, TbH2, TbH3 } from 'react-icons/tb';

const SupportedBlockType = {
  paragraph: 'Paragraph',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
} as const;
type BlockType = keyof typeof SupportedBlockType;

export const ToolbarPlugin: FC = () => {
  const [blockType] = useState<BlockType>('paragraph');

  return (
    <div className="toolbar py-2 px-6 flex items-center gap-2">
      <button
        aria-checked={blockType === 'h1'}
        aria-label={SupportedBlockType['h1']}
        role="checkbox"
        title={SupportedBlockType['h1']}
        type="button"
      >
        <TbH1 />
      </button>
      <button
        aria-checked={blockType === 'h2'}
        aria-label={SupportedBlockType['h2']}
        role="checkbox"
        title={SupportedBlockType['h2']}
        type="button"
      >
        <TbH2 />
      </button>
      <button
        aria-checked={blockType === 'h3'}
        aria-label={SupportedBlockType['h3']}
        role="checkbox"
        title={SupportedBlockType['h3']}
        type="button"
      >
        <TbH3 />
      </button>
    </div>
  );
};
