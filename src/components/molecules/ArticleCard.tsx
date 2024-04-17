import { Article } from "@prisma/client";

interface ArticleCardProps {
  title: string;
  content: string;
}

export function ArticleCard({ title, content }: ArticleCardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}