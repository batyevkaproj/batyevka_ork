"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logo from '@/public/img/logo.svg';
import logo_grey from '@/public/img/logo_grey.svg';

type LogoComponentProps = {
    theme: string
}

export default function LogoComponent( {theme} : LogoComponentProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const logoImage = (
    <Image 
      src={theme == 'white' ? logo_grey : logo} 
      height={1} 
      className="flex-shrink-0 min-w-max max-[720px]:w-[203px] max-[720px]:h-[35px] min-[2430px]:h-[70px] min-[3644px]:h-[104px] max-[1080px]:w-[308px] max-[1080px]:h-[53px] min-[1080px]:w-[308px] min-[1080px]:h-[53px] min-[2430px]:w-[403px]" 
      alt="Batyevka logo" 
    />
  );

  return (
    <div className="min-[2429px]:mr-[78px] min-[1920px]:mr-[33px] mr-[22px]">
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