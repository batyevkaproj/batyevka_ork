import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logo from '@/public/img/logo.svg';

export default function LogoMobileComponent() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const logoImage = (
    <Image 
      src={logo} 
      height={1} 
      className="flex-shrink-0 min-w-max w-[203px] h-[35px]" 
      alt="Batyevka logo" 
    />
  );

  return (
    <div className="ml-[20px] mt-[20px]">
      {isHomePage ? (
        logoImage
      ) : (
        <Link href="/">
          {logoImage}
        </Link>
      )}
    </div>
  );
}