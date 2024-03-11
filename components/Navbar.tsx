import { useModal } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import wallet_white from '../public/img/wallet_white.svg';
import _247 from '../public/img/247.svg';
import telephon from '../public/img/phone.svg';
import connect from '../public/img/connect.svg';
import wkey from '../public/img/wkey.svg'
import mobLogo from '../public/img/mobLogo.svg'
import mobButton from '../public/img/mobButton.svg'
import Sidebar from "./Sidebar";


const Navbar = () => {

    const { onOpen } = useModal();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }
    
    return ( 
        <>
        <div className="flex items-center justify-center bg-[#0D2A40]">
            <div className="min-[780px]:hidden bg-[#0D2A40] h-[60px] flex items-center justify-start w-[300px]">
                <Image src={mobLogo} alt="Batyevka.NET"></Image>
                <div className="flex ml-[10px]">
                <Image src={telephon} className={`w-[20px] h-[20px] mr-[9.75px]`} alt={'phone'}/>
                <a className='font-semibold text-white text-[24px] leading-[22px]' href={`tel:0800303230`}>0 800 30 32 30</a>
                </div>
            </div>
        </div>
        <div className="mt-[16px] min-[780px]:hidden flex items-center justify-center">
            <Button onClick={() => {onOpen("payment")}} variant="payMobMob">
                <Image src={wallet_white} className={`relative w-7 h-7 fill-white`} alt={'wallet'}></Image>
            </Button>
            <Button variant="cabinetMobMob">
                <Image src={connect} alt='connect' className={``}>
                </Image>
            </Button>
            <Button onClick={() => onOpen("call")} variant="connectMobMob">
                <Image src={wkey} alt='wkey'>
                </Image>
            </Button>
            <Sheet>
            <SheetTrigger>

           <Button variant="menuMob">
                <Image src={mobButton} alt='Menu' className={`h-[60px] w-[63px]`}>
                </Image>
            </Button>
            
            </SheetTrigger>
            <SheetContent
                side="left"
                className="p-0"
            >
            <Sidebar />
            </SheetContent>
        </Sheet>
        </div>
        </>
     );
}
 
export default Navbar;
