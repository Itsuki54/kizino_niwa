import Image from 'next/image';
import { useRouter } from 'next/router';

export function LogoTitle() {
  const router = useRouter();
  const GotoPage = () => {
    void router.push('/');
  };
  return (
    <div>
      <Image
        alt="logo"
        height={40}
        onClick={() => {
          GotoPage();
        }}
        src="/images/logo.png"
        style={{ borderRadius: '50%' }}
        width={40}
      />
      <p>
        キジノニワ
      </p>
    </div>
  );
}
