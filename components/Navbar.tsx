import { useModal } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import wallet_white from '../public/img/wallet_white.svg';
import phone from '../public/img/phone.svg';
import phone_grey from '../public/img/phone_gray.svg';
import connect from '../public/img/connect.svg';
import connect_grey from '../public/img/cabinet_grey.svg';
import wkey from '../public/img/wkey.svg';
import mobLogo from '../public/img/mobLogo.svg';
import menu_button from '../public/img/mobButton.svg';
import menu_button_orange from '../public/img/menu_button_orange.svg';
import logo_grey from '../public/img/logo_grey_mob.svg';
import Sidebar from "./Sidebar";


const Navbar = ({ theme }: any) => {

    const { onOpen } = useModal();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <div className={`flex items-center justify-center + ${theme == 'white' ? 'bg-[#F4F2F2]' : 'bg-[#0D2A40]'}`}>
                <div className={`${theme == 'white' ? 'bg-[#F4F2F2]' : 'bg-[#0D2A40]'} min-[781px]:hidden h-[60px] flex items-center justify-start w-[300px]`}>
                    <Image src={theme == 'white' ? logo_grey : mobLogo} alt="Batyevka.NET"></Image>
                    <div className="flex ml-[20px]">
                        <Image src={theme == 'white' ? phone_grey : phone} className={`w-[20px] h-[20px] mr-[9.75px]`} alt={'phone'} />
                        <a className={`${theme == 'white' ? 'text-[#5F6061]' : 'text-white'}  font-semibold  text-[24px] leading-[22px]`} href={`tel:0800303230`}>0 800 30 32 30</a>
                    </div>
                </div>
            </div>
            <div className="mt-[16px] min-[781px]:hidden flex items-center justify-center">

                <Link href={"https://next.privat24.ua/payments/form/%7B%22token%22:%22a163f3a4-7bfa-4921-8d8e-4c4737e6c0f4%22%7D"} >
                    <Button variant="payMobMob">
                        <Image src={wallet_white} className={`relative w-7 h-7 fill-white`} alt={'wallet'}></Image>
                    </Button>
                </Link>
                <Button variant={theme == 'white' ? 'cabinetGreyMobMob' : 'cabinetMobMob'}>
                    <Image src={theme == 'white' ? connect_grey : connect} alt='connect' className={`fill-white`}>
                    </Image>
                </Button>
                <Button onClick={() => onOpen("call")} variant="connectMobMob">
                    <Image src={wkey} alt='wkey'>
                    </Image>
                </Button>
                <Sheet>
                    <SheetTrigger>

                        <Button variant="menuMob">
                            <Image src={theme == 'white' ? menu_button_orange : menu_button} alt='Menu' className={`h-[60px] w-[63px]`}>
                            </Image>
                        </Button>

                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="p-0 m-0"
                    >
                        <Sidebar />
                    </SheetContent>
                </Sheet>
            </div>
            <div className={`flex justify-center items-center w-full + ${theme == 'white' ? 'hidden' : ''}`}>
                <Button onClick={() => onOpen("call")} variant="MobConnect">
                    Стати абонентом
                </Button>
            </div>
        </>
    );
};

export default Navbar;
