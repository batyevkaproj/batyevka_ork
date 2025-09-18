import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 1. Import both the dark and light theme logos
import logo_dark from '@/public/img/logo.svg';
import logo_light from '@/public/img/logo_grey.svg'; // Assuming this is your light theme logo from Navbar

// 2. Define an interface for the component's props
interface LogoMobileComponentProps {
  /**
   * The visual theme to use. Determines which logo is displayed.
   * @default 'dark'
   */
  variant?: 'dark' | 'light';
}

// 3. Update the function signature to accept the `variant` prop
export default function LogoMobileComponent({ variant = 'dark' }: LogoMobileComponentProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // 4. Select the correct logo source based on the variant prop
  const logoSrc = variant === 'dark' ? logo_dark : logo_light;

  const logoImage = (
    <Image 
      src={logoSrc} // Use the selected logo source here
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