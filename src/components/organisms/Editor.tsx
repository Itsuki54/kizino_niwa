import CharacterCount from "@tiptap/extension-character-count";
import Focus from "@tiptap/extension-focus";
import Highlight from "@tiptap/extension-highlight";
import Strike from "@tiptap/extension-strike";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { MenuBar } from "../molecules/MenuBar";

interface EditorProps {
  setContent: Function;
  finished: boolean;
}

export function Editor({ setContent, finished }: EditorProps) {
  const { setValue, getValues } = useForm();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TaskList,
      TaskItem,
      TableRow,
      Strike,
      TableHeader,
      TableCell,
      Table.configure({
        resizable: true,
      }),
      Focus.configure({
        className: "outline-none",
        mode: "all",
      }),
      CharacterCount.configure({
        limit: 10000,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "px-6 py-5 prose lg:prose-lg max-w-full focus:outline-none font-content",
      },
    },
    onUpdate({ editor }) {
      setValue("body", editor.getHTML());
      setContent(getValues("body"));
    },
  });

  useEffect(() => {
    if (finished) {
      editor!.commands.clearContent();
      setContent("");
    }
  }, [finished]);
  return (
    <div className=" flex-wrap p-4 rounded-t-md ">
      <div className="border rounded-md outline-none ">
        {editor && <MenuBar editor={editor} />}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
