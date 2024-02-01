
import Tarifs from './ihorradetskyi/Tarifs';
import Footer from './Footer';
import ContactForm from './ihorradetskyi/ContactForm';
import InfoBlock from './ihorradetskyi/InfoBlock';
import Advantages from './ihorradetskyi/Advantages';
import Slider from './ihorradetskyi/Slider';

const Body = () => {
    return ( 
        <body className={`bg-[#0E2D43]`}>
            <main className={`mx-auto w-[1110px] bg-[#0E2D43]`}>
                <Slider/>
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