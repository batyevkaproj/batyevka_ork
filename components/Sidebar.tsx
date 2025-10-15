import { useModal } from "@/hooks/use-modal-store";
import Image from 'next/image';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils"; // A utility to merge class names
import LogoMobileComponent from "./LogoMobileComponent";

import { usePathname } from "next/navigation";



// --- Dark Theme Assets ---
import wallet from '../public/img/wallet.svg';
import gear from '../public/img/gear.svg'
import _247 from '../public/img/247.svg';
import telephon from '../public/img/phone.svg';
import orange_building from '../public/img/orange_building.svg';
import orange_house from '../public/img/house_orange.svg';
import bc_orange from '../public/img/br_case_orange.svg';
import key_white from '../public/img/key_white.svg';
import globe_white from '../public/img/globe_white.png';

// --- Light Theme Assets ---
// NOTE: You must create dark versions of these icons for the light theme.
// I'm using placeholders pointing to existing files to prevent build errors.
import key_dark from '../public/img/key_white.svg'; // Placeholder: Create a dark version of this
import globe_dark from '../public/img/globe_white.png'; // Placeholder: Create a dark version of this
import phone_gray from '../public/img/phone_gray.svg'; // Using an existing gray icon

// 1. Define the props interface for the component
interface SidebarProps {
    /**
     * The visual theme of the sidebar.
     * @default 'dark'
     */
    variant?: 'dark' | 'light';
}

// 2. Update the component to accept the `variant` prop, defaulting to 'dark'
const Sidebar = ({ variant = 'dark' }: SidebarProps) => {

    const pathname = usePathname();
     const showBlock = !pathname.startsWith("/business");
     const showBlockPrivate = !pathname.startsWith("/xgspon");
    const { onOpen } = useModal();

    // 3. Create a boolean for easier conditional checks
    const isDark = variant === 'dark';

    // 4. Conditionally select the correct icon assets based on the theme
    const keyIcon = isDark ? key_white : key_dark;
    const globeIcon = isDark ? globe_white : globe_dark;
    const phoneIcon = isDark ? telephon : phone_gray;

    return (
        // 5. Apply conditional classes to the main container
        <div className={cn(
            "w-[375px] h-[100vh]",
            isDark ? "bg-[#0E2D43]" : "bg-white border-r border-gray-200"
        )}>
            {/* Conditional classes for the top bar */}
            <div className={cn(
                "w-full h-[60px] flex items-center justify-center",
                isDark ? "bg-[#0D2A40]" : "bg-gray-50 border-b border-gray-200"
            )}>
                <Image src={phoneIcon} className={`w-[20px] h-[20px] mr-[9.75px]`} alt={'phone'} />
                {/* Conditional classes for the phone number text */}
                <a className={cn(
                    'font-semibold text-[24px] leading-[22px]',
                    isDark ? 'text-white' : 'text-[#0E2D43]'
                )} href={`tel:0800303230`}>0 800 30 32 30</a>
            </div>

            {/* 6. Pass the variant prop down to child components that also need theming */}
            <LogoMobileComponent variant={variant} />

            <div className="mt-[15px] ml-[20px] flex flex-col">
                <Link className="flex mb-[20px] items-center" href={"https://next.privat24.ua/payments/form/%7B%22token%22:%22a163f3a4-7bfa-4921-8d8e-4c4737e6c0f4%22%7D"} >
                    <Image src={wallet} className={`w-8 h-8`} alt={'wallet'}></Image>
                    <span className="ml-[15px] font-semibold text-[#51B18B]">Оплата</span>
                </Link>
                <Link className="flex justify-start mb-[20px]" href={"/computer-help"} >
                    <Image src={_247} className={`w-8 h-8`} alt={'options'}></Image>
                    <span className="ml-[15px] font-semibold text-[#56AABF]">Підтримка</span>
                </Link>
                <Link className="flex justify-start mb-[20px]" href={"/network-hardware"} >
                    <Image src={gear} className={`w-8 h-8`} alt={'options'}></Image>
                    <span className="ml-[15px] font-semibold text-[#56AABF]">Обладнання</span>
                </Link>

                
            </div>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className={cn(
                        "h-[48px] flex items-center w-full hover:no-underline",
                        isDark ? "bg-[#0E2D43] shadow-[0_4px_29px_0_#081925]" : "hover:bg-gray-50"
                    )}>
                        <Image src={orange_building} alt={'orange'} className="ml-[24px]"></Image>
                        <span className="ml-[15px] uppercase font-semibold text-[#DC662D]">для багатоповерхівок</span>
                    </AccordionTrigger>
                    {/* Conditional classes for accordion content */}
                    <AccordionContent className={cn(
                        "flex flex-col ml-[20px] text-[13px] font-semibold",
                        isDark ? "text-white" : "text-gray-700 bg-gray-50"
                    )}>
                        <Link href={'/'} className="mt-[10px] hover:underline">Інтернет</Link>
                        <Link href={'/xgspon'} className="mt-[10px] hover:underline">10G Інтернет</Link>
                        <Link href={'/prices'} className="mt-[10px] hover:underline">Тарифи</Link>
                        <Link href={'/promotions'} className="mt-[10px] hover:underline">Акції</Link>
                        <Link href={'#'} className="mt-[10px] hover:underline">Телебачення</Link>
                    </AccordionContent>
                </AccordionItem>
                {/* Apply the same logic for other accordion items */}
                
                <Link href={'/xgspon'}>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className={cn("h-[48px] flex items-center w-full hover:no-underline", isDark ? "bg-[#0E2D43] shadow-[0_4px_29px_0_#081925]" : "hover:bg-gray-50")}>
                            <Image src={orange_house} alt={'orange'} className="ml-[20px]"></Image>
                            <span className="ml-[10px] uppercase font-semibold text-[#DC662D]">Приватному сектору</span>
                        </AccordionTrigger>
                        <AccordionContent className={cn("flex flex-col ml-[20px] text-[13px] font-semibold", isDark ? "text-white" : "text-gray-700 bg-gray-50")}>
                            <Link href={'/private-sector'} className="mt-[10px] hover:underline">Інтернет</Link>
                        </AccordionContent>
                    </AccordionItem>
                </Link>

                {showBlock && (
                    <Link href={'business'} className="mt-[10px] hover:underline">
                        <AccordionItem value="item-3">
                            <AccordionTrigger className={cn("h-[48px] flex items-center w-full hover:no-underline", isDark ? "bg-[#0E2D43] shadow-[0_4px_29px_0_#081925]" : "hover:bg-gray-50")}>
                                <Image src={bc_orange} alt={'orange'} className="ml-[24px]"></Image>
                                <span className="ml-[13px] uppercase font-semibold text-[#DC662D]">бiзнесу</span>
                            </AccordionTrigger>
                        </AccordionItem>
                    </Link>
                )}
            </Accordion>


        
        </div>
    );
};

export default Sidebar;