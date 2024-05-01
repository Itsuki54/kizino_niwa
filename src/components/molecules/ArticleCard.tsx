import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { BsHeart } from "react-icons/bs";
interface ArticleCardProps {
  title: string;
  userName: string;
  articleId: string;
  content: string;
  like: number;
  user: User;
}

export function ArticleCard({
  title,
  userName,
  articleId,
  like,
  user,
}: ArticleCardProps) {
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
    <div
      className="flex-col flex bg-primary-100 border m-2 rounded-md p-2"
      onClick={handleClick}
    >
      <div className="flex justify-between items-center">
        <div className="text-xl">{title}</div>
        <div className="flex-col">
          <div className="flex items-center gap-1">
            <BsHeart />
            {like}
          </div>
          <div className="text-xs">{userName}</div>
        </div>
      </div>
    </div>
  );
}
