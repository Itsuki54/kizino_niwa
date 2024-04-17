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
    router.push({
      pathname: `/${userId}`,
      query: { name: name },
    });
  };
  return (
    <>
      <Image
        src={imageUrl}
        alt={name}
        width={32}
        height={32}
        style={{ borderRadius: "50%" }}
        onClick={() => {
          GotoPage();
        }}
      />
    </>
  );
}
