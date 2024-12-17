import { Link } from 'lucide-react';
import Image from 'next/image';

export const LogoTitle=()=> {
  return (
    <Link href='/'>
      <div
        className='flex items-center p-1'>
        <Image alt='logo' height={10} src='/svgs/logo.svg' width={100} />
      </div>
    </Link>
  );
}
