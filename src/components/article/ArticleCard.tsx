import { Article, User } from "@prisma/client";
import Image from "next/image";
import { LikeBotton } from "../common/LikeBotton";
import { binaryToTags } from "@/utils/binary";

interface ArticleCardProps {
  id: Article["id"];
  title: Article["title"];
  content: Article["content"];
  userId: Article["userId"];
  createdAt: Article["createdAt"];
  updatedAt: Article["updatedAt"];
  tags: Article["tags"];
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
  tags,
}: ArticleCardProps) {
  const createDate = new Date(createdAt);
  const updateDate = new Date(updatedAt);
  const tagList = binaryToTags(tags);
  return (
    <div className="px-10 my-4 py-6 bg-white rounded-lg shadow-md items-center m-4">
      <div className="flex justify-between items-center">
        {createDate.toLocaleDateString()}
        {`最終更新日${updateDate.toLocaleDateString()}`}
        <LikeBotton good={like} isLiked={false} />
      </div>
      <a
        className="text-2xl text-gray-700 font-bold hover:text-gray-600"
        href={`/article/${[id]}`}
      >
        {title}
      </a>
      <div className="flex justify-between items-center mt-4">
        <a className="text-blue-600 hover:underline" href={`/article/${[id]}`}>
          続きを読む
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
