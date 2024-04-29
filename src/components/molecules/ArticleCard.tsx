import { User } from '@prisma/client';
import { useRouter } from 'next/router';

interface ArticleCardProps {
  title: string;
  userName: string;
  articleId: string;
  content: string;
  like: number;
  user: User;
}

export function ArticleCard({ title, userName, articleId, like, user }: ArticleCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: `/article/${articleId}`,
      query: {
        articleId: articleId,
        userId: user.id,
      },
    });
  };
  return (
    <div className="flex-col flex bg-primary-100 border m-2 rounded-md" onClick={handleClick}>
      <div className="text-xl">{title}</div>
      <div>{like}</div>
      <div>{userName}</div>
    </div>
  );
}
