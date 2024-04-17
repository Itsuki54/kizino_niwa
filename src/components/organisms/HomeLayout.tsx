import React from "react";

import { ArticleCard, ArticleCardProps } from "../molecules/ArticleCard";

interface HomeLayoutProps {
  header: React.ReactNode;
  articles: ArticleCardProps[];
}

export function HomeLayout({ header, articles }: HomeLayoutProps) {
  return (
    <div>
      <header>{header}</header>
      <main>
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </main>
    </div>
  );
}
