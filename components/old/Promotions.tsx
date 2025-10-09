import bandit from '../../public/img/promotions/170TV.WEB.svg'
import pc1000 from '../../public/img/promotions/PC1000Mbit.svg'
import drug from '../../public/img/promotions/PC_DRUG_UA1.svg'
import pc300 from '../../public/img/promotions/PC300Mbit.svg'
import bandit_mob from '../../public/img/promotions/170TVmobile.svg'
import mob1000 from '../../public/img/promotions/mobile1000Mbit.svg'
import drug_mob from '../../public/img/promotions/mobile_drug.svg'
import mob300 from '../../public/img/promotions/mobile300mbit.svg'

import Bandit from './promotions/Bandit'
import Tvthou from './promotions/Tvthou'
import Tvthree from './promotions/Tvthree'
import Drug from './promotions/Drug'

import Image from 'next/image';
import Link from 'next/link';

const Promotions = () => {
    return (
        <div className="flex flex-col items-center py-8">

            <div className="max-w-[1110px] w-full mx-auto flex flex-col items-center space-y-8 px-4 md:px-0 text-[#5F6061]">


            <h1 className={`flex text-center items-center justify-center font-bold  text-[50px] leading-[62px] max-[2377px]:text-[42px] max-[2377px]:leading-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] max-[680px]:text-[24px] max-[680px]:leading-[30px]`}>Акції</h1>
            <p className={`text-[#bdbdbd]`}>Подобається тариф? Залишайте заявку на сайті – отримайте 5% знижки на підключення!</p>
                <div className="flex flex-col space-y-4">

                    {/* Promotion 1: 170 TV + Internet */}
                    <Link href="promotions/bandit" className="block md:hidden"> {/* Shown on mobile, Hidden on md+ */}
                        <Image src={bandit_mob} alt='Акція Телебачення + Інтернет 170 каналів (мобільна версія)' />
                    </Link>
                    <Link href="promotions/bandit" className="hidden md:block"> {/* Hidden on mobile, Shown on md+ */}
                        <Image src={bandit} alt='Акція Телебачення + Інтернет 170 каналів (десктопна версія)' />
                    </Link>

                    {/* Promotion 2: 1000 Mbit Internet */}
                    <Link href="promotions/tvthou" className="block md:hidden"> {/* Shown on mobile, Hidden on md+ */}
                        <Image src={mob1000} alt='Акція Гігабітний Інтернет 1000 Мбіт (мобільна версія)' />
                    </Link>
                    <Link href="promotions/tvthou" className="hidden md:block"> {/* Hidden on mobile, Shown on md+ */}
                        <Image src={pc1000} alt='Акція Гігабітний Інтернет 1000 Мбіт (десктопна версія)' />
                    </Link>

                    {/* Promotion 3: Recommend Friend */}
                    <Link href="promotions/drug" className="block md:hidden"> {/* Shown on mobile, Hidden on md+ */}
                         <Image src={drug_mob} alt='Акція Рекомендуй Другу (мобільна версія)' />
                    </Link>
                    <Link href="promotions/drug" className="hidden md:block"> {/* Hidden on mobile, Shown on md+ */}
                         <Image src={drug} alt='Акція Рекомендуй Другу (десктопна версія)' />
                    </Link>


                    {/* Promotion 4: 300 Mbit Internet */}
                    <Link href="promotions/tvthree" className="block md:hidden"> {/* Shown on mobile, Hidden on md+ */}
                        <Image src={mob300} alt='Акція Інтернет 300 Мбіт (мобільна версія)' />
                    </Link>
                    <Link href="promotions/tvthree" className="hidden md:block"> {/* Hidden on mobile, Shown on md+ */}
                        <Image src={pc300} alt='Акція Інтернет 300 Мбіт (десктопна версія)' />
                    </Link>

                </div>
            </div>
        </div>
     );
};
 
export default Promotions;