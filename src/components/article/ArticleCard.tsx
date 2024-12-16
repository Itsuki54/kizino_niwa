import {
  Article,
  User,
} from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

import { LikeBotton } from "@/components/common/LikeBotton";
import { binaryToTags } from "@/utils/binary";

type ArticleCardProps = {
  id: Article["id"];
  title: Article["title"];
  content: Article["content"];
  userId: Article["userId"];
  createdAt: Article["createdAt"];
  updatedAt: Article["updatedAt"];
  tags: Article["tags"];
  like: number;
  createdUser: User;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  content,
  userId,
  createdAt,
  updatedAt,
  like,
  createdUser,
  tags,
}) => {
  const createDate = new Date(createdAt);
  const updateDate = new Date(updatedAt);
  const tagList = binaryToTags(tags);
  const [likeCount, setLikeCount] = useState(like);
  const [isLiked, setIsLiked] = useState(false);
  const likeAdd = async () => {
    setLikeCount(likeCount + 1);
    setIsLiked(true);
    await fetch("/api/article", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        method: "LikeAdd",
        id: id,
        title: title,
        content: content,
        userId: userId,
        tags: tags,
      }),
    });
    await fetch("/api/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        articleId: id,
        userId: userId,
      }),
    });
  };
  const likeRemove = async () => {
    setLikeCount(likeCount - 1);
    setIsLiked(false);
    await fetch("/api/article", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        method: "LikeRemove",
        id: id,
        title: title,
        content: content,
        userId: userId,
        tags: tags,
      }),
    });
  };
  return (
    <div className="px-10 my-4 py-6 bg-white rounded-lg shadow-md items-center m-4">
      <div className="flex justify-between items-center">
        {createDate.toLocaleDateString()}
        {`最終更新日${updateDate.toLocaleDateString()}`}
        <LikeBotton
          good={likeCount}
          isLiked={isLiked}
          onClick={() => {
            isLiked ? likeRemove() : likeAdd();
          }}
        />
      </div>
      <a
        className="text-2xl text-gray-700 font-bold hover:text-gray-600"
        href={`/article/${[id]}`}
      >
        {title}
      </a>
      {
        <div className="flex justify-start items-center mt-4">
          <div className="flex gap-2">
            {tagList.map((tag, index) => (
              <div className="bg-gray-200 rounded p-1" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      }
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
              style={{ borderRadius: 50, margin: 4 }}
              width="32"
            />
            <h1 className="text-gray-700 font-bold">{createdUser.name}</h1>
          </a>
        </div>
      </div>
    </div>
  );
};
