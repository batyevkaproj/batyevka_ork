import { useModal } from "@/hooks/use-modal-store";

import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/img/logo.svg';
import wallet from '../public/img/wallet.svg'
import _247 from '../public/img/247.svg';
import telephon from '../public/img/phone.svg';
import gear from '../public/img/gear.svg';


const Sidebar = () => {

    const { onOpen } = useModal();

    

    return ( 
        <div className="max-[500px]:hidden w-[375px] h-[100vh] bg-[#0E2D43]"> 
            <div className="w-full h-[60px] bg-[#0D2A40] flex items-center justify-center">
                <Image src={telephon} className={`w-[20px] h-[20px] mr-[9.75px]`} alt={'phone'}/>
                <a className='font-semibold text-white text-[24px] leading-[22px]' href={`tel:0800303230`}>0 800 30 32 30</a>
            </div>
            <div className="ml-[20px] mt-[20px]">
                <Link href='/' className="">
                    <Image src={logo} height={1} className={`flex-shrink-0 min-w-max w-[203px] h-[35px]`} alt={'Batyevka logo'}/>
                </Link>
            </div>
            <div className="mt-[15px] ml-[20px] flex flex-col">
                <Link href={"#"} onClick={() => {onOpen("payment")}} >
                    <Image src={wallet} className={`w-7 h-7 mr-[15px]`} alt={'wallet'}></Image>
                        Оплата
                </Link>
                <Link href={"#"} onClick={() => {onOpen("payment")}} >
                    <Image src={_247} className={`w-7 h-7 mr-[15px]`} alt={'options'}></Image>
                        Підтримка
                </Link>
                <Link href={"#"} onClick={() => {onOpen("payment")}}>
                    <Image src={gear} className={`w-7 h-7 mr-[15px]`} alt={'wallet'}></Image>
                        Опції
                </Link>
            </div>
        </div>
     );
}
 
export default Sidebar;