import Image from 'next/image';
import infinity from '../public/img/infinity.png';
import cable from '../public/img/cable.png';
import sign from '../public/img/sign.png';
import vector from '../public/img/Vector.svg';
import Tarifs from './ihorradetskyi/Tarifs';
import Footer from './Footer';
import ContactForm from './ihorradetskyi/ContactForm';
import InfoBlock from './ihorradetskyi/InfoBlock';
import Advantages from './ihorradetskyi/Advantages';

const Body = () => {
    return ( 
        <body className={`bg-[#0E2D43]`}>
            <main className={`mx-auto w-[1110px] bg-[#0E2D43]`}>
                <div className={`h-[446px] w-[1110px] flex items-center justify-between`}>
                    <div>
                        <h1 className={` text-[60px] font-bold text-white`}>Інтернет <span className={`text-[#56AABF]`}>в офіс</span></h1>
                        <li className={`list-none text-white flex flex-col mb-[30px]`}>
                            <div className={`flex items-center mb-[15px]`}>
                            <span className={`box-border w-5 flex`}><Image src={infinity} className={`inline-flex`} alt='infinity'/></span>
                            <ul className={`ml-2  font-normal`}>Безлімітні та необмежені тарифні плани</ul>
                            </div>
                            
                            <div className={`flex items-center mb-[15px]`}>   
                            <span className={`box-border w-[20px] pl-[5px] flex justify-center self-start pt-[5px]`}><Image src={sign} className={`inline-flex`} alt={`sign`}/></span>
                            <ul className={`ml-3  font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</ul>
                            </div>
                            
                            <div className={`flex items-center`}>
                            <span className={`box-border w-5 flex justify-center self-start`}><Image src={cable} className={`inline-flex`} alt={`cable`}/></span>
                            <ul className={`ml-2  font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</ul>
                            </div>
                        </li>
                        <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]`}>Замовити</button>
                    </div>
                    <div>
                        <Image src={vector} alt='vector'/>
                    </div>
                </div>
                <div className={` text-[42px] font-bold text-white flex items-center justify-center w-[1110px]`}>
                    <h1 className={`text-center w-[913px] flex items-center justify-center`}>Ключові переваги для наших бізнес абонентів</h1>
                </div>
                <Advantages/>
                <Tarifs/>
                <ContactForm/>
                <InfoBlock/>
            </main>
            <Footer/>
        </body>
    );
}
 
export default Body;