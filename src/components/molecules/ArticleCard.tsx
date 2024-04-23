import { useRouter } from 'next/router';

interface ArticleCardProps {
  title: string;
  userName: string;
  articleId: string;
  content: string;
  like: number;
}

export function ArticleCard({ title, userName, articleId, content, like }: ArticleCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: `/article/${articleId}`,
      query: { title: title, userName: userName, content: content, like: like },
    });
  };
  return (
    <div className="flex-col flex bg-primary-100 border m-2 rounded-md" onClick={handleClick}>
      <div className="text-xl  ">{title}</div>
      <div>{like}</div>
      <div>{userName}</div>
    </div>
  );
}
