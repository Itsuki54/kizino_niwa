import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

import { HeadingButton } from '@atoms/HeadingButton.tiptap';
const content = `
<h1>朝の散歩で目覚める喜び</h1>
毎朝、私は早起きして朝の新鮮な空気を感じながら散歩に出かける習慣を持っています。
その短い時間が私の一日を素晴らしいものにしてくれるのです。朝の散歩には何か特別な魔法があるように感じます。

<h2>自然との共鳴</h2>
道を歩くと、目の前には美しい花が咲き誇り、鳥たちが歌を奏でています。季節ごとに景色が変わり、自然の息吹を感じることができるのが嬉しいですね。都会にいても、朝の静けさに包まれると心が穏やかになります。

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
`;

export function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'p-4 border rounded-md',
      },
    },
    content: content,
  });

  useEffect(() => {
    console.log(editor?.getHTML());
  }, [editor]);

  return (
    <div className="flex flex-col gap-4 rounded-md bg-white p-4">
      <div className="flex flex-wrap gap-4">
        <HeadingButton editor={editor} level={1} />
        <HeadingButton editor={editor} level={2} />
        <HeadingButton editor={editor} level={3} />
        <HeadingButton editor={editor} level={4} />
        <HeadingButton editor={editor} level={5} />
        <HeadingButton editor={editor} level={6} />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
