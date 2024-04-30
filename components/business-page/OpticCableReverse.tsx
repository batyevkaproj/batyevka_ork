import Image from "next/image";

import flag from '../../public/img/prideFlag.svg'


const OpticCableReverse = () => {
    return ( 
        <div className="flex">
            <Image src={flag} className="w-[210px] h-[44px] scale-x-[-1] min-[2378px]:scale-x-[-1.33] min-[2378px]:scale-y-[1.33] min-[3644px]:scale-x-[-1.96] min-[3644px]:scale-y-[1.96]" alt="DawnPride" />
            <div className="h-[45px] w-[1500px] bg-[#123853] min-[2378px]:scale-y-[1.33] min-[3644px]:scale-y-[1.96] min-[2378px]:ml-[35px] min-[3664px]:ml-[101px]">
            </div>
        </div>

     );
}
 
export default OpticCableReverse;