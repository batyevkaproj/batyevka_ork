
import Tarifs from './ihorradetskyi/Tarifs';
import Footer from './Footer';
import ContactForm from './ihorradetskyi/ContactForm';
import InfoBlock from './ihorradetskyi/InfoBlock';
import Advantages from './ihorradetskyi/Advantages';
import Slider from './ihorradetskyi/Slider';
import Heading from './ihorradetskyi/Heading';

const Body = () => {
    return ( 
        <body className={`bg-[#0E2D43]`}>
            <main className={`mx-auto w-[1110px] bg-[#0E2D43]`}>
                <Slider/>
                <Heading text={'Ключові переваги для наших бізнес абонентів'}></Heading>
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