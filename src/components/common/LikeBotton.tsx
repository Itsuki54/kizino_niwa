import { BsHeart } from "react-icons/bs";

interface LikeBottonProps {
  good: number;
  isLiked: boolean;
}

export function LikeBotton({ good, isLiked }: LikeBottonProps) {
  return (
    <div>
      <BsHeart />
      {good}
    </div>
  );
}
