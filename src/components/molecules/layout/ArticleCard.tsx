import { Article, User } from "@prisma/client";
import { useRouter } from "next/router";
import { BsHeart } from "react-icons/bs";
import Image from "next/image";
interface ArticleCardProps {
  id: Article["id"];
  title: Article["title"];
  content: Article["content"];
  userId: Article["userId"];
  createdAt: Article["createdAt"];
  updatedAt: Article["updatedAt"];
  like: number;
  createdUser: User;
}

export function ArticleCard({
  id,
  title,
  content,
  userId,
  createdAt,
  updatedAt,
  like,
  createdUser,
}: ArticleCardProps) {
  const date = new Date(createdAt);
  return (
    <div className="px-10 my-4 py-6 bg-white rounded-lg shadow-md items-center m-4">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {date.toLocaleDateString()}
        </span>
        <a
          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
          href="#"
        >
          <div className="flex items-center">
            <BsHeart />
            {like}
          </div>
        </a>
      </div>
      <div className="mt-2">
        <a
          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
          href={`/article/${[id]}`}
        >
          {title}{" "}
        </a>
      </div>
      <div className="flex justify-between items-center mt-4">
        <a className="text-blue-600 hover:underline" href={`/article/${[id]}`}>
          Read more
        </a>
        <div>
          <a className="flex items-center" href="#">
            <Image
              alt="pen"
              height="32"
              src={createdUser.image}
              width="32"
              style={{ borderRadius: 50, margin: 4 }}
            />
            <h1 className="text-gray-700 font-bold">{createdUser.name}</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
