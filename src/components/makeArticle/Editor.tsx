import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

type MarkdownEditorProps = {
	markdown: string;
	setMarkdown: Function;
};

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ markdown, setMarkdown }) => {
	return (
		<div className="flex gap-5 p-5">
			<div className=" overflow-y-auto w-1/2">
				<textarea
					className="w-full p-3 text-lg overflow-y-auto border border-gray-300 rounded min-h-[400px]"
					onChange={e => setMarkdown(e.target.value)}
					placeholder="Write your Markdown here..."
					value={markdown}
				/>
			</div>
			<div className="flex-1 p-3 border rounded overflow-y-auto max-h-[400px]">
				<ReactMarkdown
					className="markdown-body"
					rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeKatex]}
					remarkPlugins={[remarkMath, remarkGfm]}
				>
					{markdown}
				</ReactMarkdown>
			</div>
		</div>
	);
};
