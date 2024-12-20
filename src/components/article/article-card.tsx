import Image from 'next/image';
import Link from 'next/link';

import { ArticleWithUser } from '@/types/article';
import { binaryToTags } from '@/utils/binary';

export const ArticleCard = ({
  props,
}: {
  props: ArticleWithUser;
}) => {
  const { id, title, content, createdAt, updatedAt, userId, tags, user } = props;
  const createDate = new Date(createdAt);
  const updateDate = new Date(updatedAt);
  const tagList = binaryToTags(tags);

  return (
    <div className='px-6 py-8 bg-white rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow'>
      <div className='flex justify-between items-center mb-4 text-sm text-gray-500'>
        <span>{createDate.toLocaleDateString()}</span>
        <span>最終更新日 {updateDate.toLocaleDateString()}</span>
      </div>

      <Link
        aria-label={`Read article: ${title}`}
        className='text-2xl font-semibold text-gray-800 hover:text-gray-600 mb-2 block'
        href={`/article/${id}`}
      >
        {title}
      </Link>

      <div className='flex flex-wrap gap-2 mb-4'>
        {tagList.map((tag, index) => (
          <span
            className='bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full'
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className='flex justify-between items-center mt-4'>
        <Link
          aria-label={`Read more about ${title}`}
          className='text-blue-600 hover:underline'
          href={`/article/${id}`}
        >
          続きを読む
        </Link>
        <div className='flex items-center'>
          <Image
            alt={`${user.name}'s profile`}
            className='rounded-full mr-2'
            height={32}
            src={user.image}
            width={32}
          />
          <span className='font-medium text-gray-700'>{user.name}</span>
        </div>
      </div>
    </div>
  );
};
