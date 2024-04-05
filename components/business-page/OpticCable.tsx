import Image from "next/image";


import flag from '../../public/img/prideFlag.svg'

const OpticCable = () => {
    return ( 
        <div className="flex absolute">
            <div className="h-[45px] w-[45vw] bg-[#123853] top-96">
            </div>
            <Image src={flag} className="w-[210px] h-[44px]" alt="DawnPride" />
        </div>

     );
}
 
export default OpticCable;