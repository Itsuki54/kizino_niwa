import Image from 'next/image';
import { useRouter } from 'next/router';

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
      query: { name: name },
    });
  };
  return (
    <>
      <Image
        alt={name}
        height={32}
        onClick={() => {
          GotoPage();
        }}
        src={imageUrl}
        style={{ borderRadius: '50%' }}
        width={32}
      />
    </>
  );
}
