import Image from 'next/image';
import { useRouter } from 'next/router';

export function LogoTitle() {
  const router = useRouter();
  const GotoPage = () => {
    void router.push('/');
  };
  return (
    <div
      className='flex items-center p-1'
      onClick={() => {
        GotoPage();
      }}
    >
      <Image alt='logo' height={10} src='/svgs/logo.svg' width={100} />
    </div>
  );
}
