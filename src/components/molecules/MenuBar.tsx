import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsCodeSlash,
  BsParagraph,
  BsTypeH1,
  BsTypeH2,
  BsListUl,
  BsListOl,
  BsArrowCounterclockwise,
  BsTypeH3,
} from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { GrUndo, GrRedo } from "react-icons/gr";

export const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-row flex-wrap items-center gap-1  px-5 py-2 rounded-t-md ring-2 ">
      <a
        className={
          editor.isActive("bold")
            ? "bg-gray-200 rounded-md"
            : "hover:bg-gray-200 duration-200 rounded-md"
        }
        href="#"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <BsTypeBold size={30} style={{ margin: "4px" }} />{" "}
      </a>
      <a
        className={
          editor.isActive("italic")
            ? "bg-gray-200 rounded-md"
            : "hover:bg-gray-200 duration-200 rounded-md"
        }
        href="#"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <BsTypeItalic size={30} style={{ margin: "4px" }} />{" "}
      </a>
      <a
        className={
          editor.isActive("strike")
            ? "bg-gray-200 rounded-md"
            : "hover:bg-gray-200 duration-200 rounded-md"
        }
        href="#"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <BsTypeStrikethrough size={30} style={{ margin: "4px" }} />{" "}
      </a>
      <a
        className={
          editor.isActive("code")
            ? "bg-gray-200 rounded-md"
            : "hover:bg-gray-200 duration-200 rounded-md"
        }
        href="#"
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        <BsCodeSlash size={30} style={{ margin: "4px" }} />
      </a>
      <a
        className={
          editor.isActive("highlight")
            ? "bg-gray-200 rounded-md"
            : "hover:bg-gray-200 duration-200 rounded-md"
        }
        href="#"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
      >
        <FaPen size={30} style={{ margin: "4px" }} />
      </a>
      <a
        className="hover:bg-gray-200 duration-200 rounded-md"
        href="#"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        <BsArrowCounterclockwise className="p-1" size={30} />
      </a>
      <a
        className={"rounded-md"}
        href="#"
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        <BsParagraph size={30} style={{ margin: "4px" }} />
      </a>
      <a
        className={
          editor.isActive("heading", { level: 1 })
            ? "bg-gray-200 rounded-md"
            : "hover:bg-gray-200 duration-200 rounded-md"
        }
        href="#"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <BsTypeH1 className="p-1" size={30} />
      </a>
      <a
        className={
          editor.isActive("heading", { level: 2 })
            ? "bg-gray-200 rounded-md"
            : "hover:bg-gray-200 duration-200 rounded-md"
        }
        href="#"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <BsTypeH2 className="p-1" size={30} />
      </a>
      <a
        className={
          editor.isActive("heading", { level: 3 })
            ? "bg-gray-200 rounded-md"
            : "hover:bg-gray-200 duration-200 rounded-md"
        }
        href="#"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <BsTypeH3 className="p-1" size={30} />
      </a>
      <a
        className={
          editor.isActive("bulletList")
            ? "bg-gray-200 rounded-md"
            : "hover:bg-gray-200 duration-200 rounded-md"
        }
        href="#"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <BsListUl className="p-0.5" size={30} />
      </a>
      <a
        className={
          editor.isActive("orderedList")
            ? "bg-gray-200 rounded-md"
            : "hover:bg-gray-200 duration-200 rounded-md"
        }
        href="#"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <BsListOl className="p-0.5" size={30} />
      </a>
      <a
        className={"rounded-md"}
        href="#"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <GrUndo size={30} style={{ margin: "4px" }} />
      </a>
      <a
        className={" rounded-md"}
        href="#"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <GrRedo size={30} style={{ margin: "4px" }} />
      </a>
    </div>
  );
};
