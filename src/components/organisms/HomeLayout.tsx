import React from "react";

import { Article } from "@prisma/client";
import { ArticleCard } from "../molecules/ArticleCard";

interface HomeLayoutProps {
  header: React.ReactNode;
  articles: Article[];
}

export function HomeLayout({ header, articles }: HomeLayoutProps) {
  return (
    <div>
      <header>{header}</header>
      <main>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.content}
          />
        ))}
      </main>
    </div>
  );
}
