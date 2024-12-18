import {
  Article,
  User,
} from '@prisma/client';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { Divider } from '@/components/common/Divider';
import { ProfileButton } from '@/components/header/profile-button';
import { binaryToTags } from '@/utils/binary';

type ArticlePageProps = {
  article: Article;
  createdUser: User;
};

export const ArticlePage = ({ article, createdUser }: ArticlePageProps) => {
  const tags = binaryToTags(article.tags);
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <div className='text-xl'>{article.title}</div>
        <ProfileButton
          imageUrl={createdUser.image!}
          name={createdUser.name}
          userId={createdUser.id}
        />
      </div>
      <Divider />
      <div>
        <div className='flex gap-2'>
          {tags.map((tag, index) => (
            <div className='bg-gray-200 rounded p-1' key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <ReactMarkdown
        className='markdown-body'
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeKatex]}
        remarkPlugins={[remarkMath, remarkGfm]}
      >
        {article.content}
      </ReactMarkdown>
    </div>
  );
};
