import { useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

interface LikeBottonProps {
  good: number;
  isLiked: boolean;
  onClick?: () => void;
}

export function LikeBotton({ good, isLiked, onClick }: LikeBottonProps) {
  return (
    <div className="flex p-1 items-center justify-center gap-2">
      <FaHeart
        className={`text-xl ${isLiked ? "text-red-600" : "text-gray-400"}`}
        onClick={onClick}
      />
      <a className="text-s items-center justify-center">{good}</a>
    </div>
  );
}