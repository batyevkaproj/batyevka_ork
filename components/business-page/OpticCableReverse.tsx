import Image from "next/image";

import flag from '../../public/img/prideFlag.svg'


const OpticCableReverse = () => {
    return ( 
        <div className="flex absolute right-[-60vw]">
            <Image src={flag} className="w-[210px] h-[44px] scale-x-[-1]" alt="DawnPride" />
            <div className="h-[45px] w-[1500px] bg-[#123853] top-96">
            </div>
        </div>

     );
}
 
export default OpticCableReverse;