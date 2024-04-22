import { Article } from '@prisma/client';
import React from 'react';

import { ArticleCard } from '../molecules/ArticleCard';

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
          <ArticleCard content={article.content} key={article.id} title={article.title} />
        ))}
      </main>
    </div>
  );
}
