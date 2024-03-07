import Image from "next/image";

import { cn } from "@/lib/utils";

import flag from '../../public/img/prideFlag.svg'

const OpticCable = () => {
    return ( 
        <div className="flex absolute left-[-60vh] max-[1770px]:hidden">
            <div className="h-[45px] w-[1500px] bg-[#123853] top-96">
            </div>
            <Image src={flag} className="w-[210px] h-[44px]" alt="DawnPride" />
        </div>

     );
}
 
export default OpticCable;