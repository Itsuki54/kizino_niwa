import Image from "next/image";
import { useRouter } from "next/router";

interface ProfileButtonProps {
  imageUrl: string;
  name: string;
  userId: string;
}

export function ProfileButton({ imageUrl, name, userId }: ProfileButtonProps) {
  const router = useRouter();
  const GotoPage = () => {
    void router.push({
      pathname: `/${userId}`,
    });
  };
  return (
    <div className="flex flex-row items-center gap-1">
      <Image
        alt={name}
        height={32}
        onClick={GotoPage}
        src={imageUrl}
        className="rounded-full cursor-pointer"
        width={32}
      />
    </div>
  );
}
