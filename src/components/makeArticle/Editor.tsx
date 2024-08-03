import { useState, useRef, useEffect } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

interface MarkdownEditorProps {
  markdown: string;
  setMarkdown: Function;
}
export function MarkdownEditor({ markdown, setMarkdown }: MarkdownEditorProps) {
  return (
    <div className="flex gap-5 p-5">
      <div className=" overflow-y-auto w-1/2">
        <textarea
          className="w-full p-3 text-lg overflow-y-auto border border-gray-300 rounded min-h-[400px]"
          placeholder="Write your Markdown here..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div className="flex-1 p-3 border rounded overflow-y-auto max-h-[400px]">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeKatex]}
          className="markdown-body"
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
