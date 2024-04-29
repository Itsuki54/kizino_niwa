import { Article, User } from '@prisma/client';
import parse from 'html-react-parser';
import Image from 'next/image';

import { Divider } from '../atoms/Divider';

interface ArticleHTMLProps {
  article: Article;
  user: User;
}

export function ArticleHTML({ article,user }: ArticleHTMLProps) {
  return (
    <div className="p-4">
      <div className = "flex justify-between items-center">
      <div className='text-xl'>{article.title}</div>
      <Image alt={user.name} height={32
      } src={user.image} width={32
      } />
      </div>
      <Divider />
      <div>{parse(article.content)}</div>
    </div>
  );
}
