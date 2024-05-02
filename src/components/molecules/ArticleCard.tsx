import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { BsHeart } from "react-icons/bs";
import Image from "next/image";
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
    <button
      className=" flex border m-2 bg-white rounded-md p-2
      hover:bg-gray-50 hover:shadow-md transition duration-300 ease-in-out items-center
      "
      onClick={handleClick}
    >
      <Image
        src={user.image}
        alt={user.name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{userName}</p>

        <div className="flex items-center mt-2">
          <BsHeart className="text-red-500" />
          <p className="ml-2">{like}</p>
        </div>
      </div>
    </button>
  );
}
