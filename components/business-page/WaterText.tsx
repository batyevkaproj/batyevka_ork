import react, { useState } from 'react'
import { ChevronDown } from "lucide-react"

const WaterText = ({theme}:any) => {
    const [isInfo1Visible, setIsInfo1Visible] = useState(false);
    const [isInfo2Visible, setIsInfo2Visible] = useState(false);
    const [isInfo3Visible, setIsInfo3Visible] = useState(false);

    const toggleInfo1Visibility = () => {
        setIsInfo1Visible(!isInfo1Visible);
    };

    const toggleInfo2Visibility = () => {
        setIsInfo2Visible(!isInfo2Visible);
    };

    const toggleInfo3Visibility = () => {
        setIsInfo3Visible(!isInfo3Visible);
    };
    
    return (
        <div className={`min-[3644px]:mt-[180px] mt-[120px] max-[2377px]:mt-[90px] max-[932px]:mt-[60px] max-[680px]:mt-[40px] font-normal ${theme=='white'?'text-[#5F6061]':'text-white'}`}>
            <div className={`min-[3644px]:mx-[240px] mx-[170px] max-[2377px]:mx-[120px] max-[1600px]:mx-[85px] max-[1247px]:mx-[67px] max-[932px]:mx-[35px] max-[680px]:mx-[20px]`}>
                <div className={`max-[563px]:hidden text-[20px] leading-[28px] max-[2377px]:leading-[24px] max-[2377px]:text-[16px] min-[3644px]:leading-[42px] min-[3644px]:text-[30px]`}>
                    <h1 className={``}>
                        Актуальні безлімітні тарифи інтернет провайдерів Києва дають змогу обрати безліч варіантів. Як зробити вірний вибір і підібрати тариф, який не розчарує в перший же місяць користування? Компанія Batyevka.NET запрошує вас звернутися до провайдера, для якого важливий кожний клієнт – гарантуємо індивідуальний підхід до кожного і підбір тарифу, відповідно до ваших вимог та побажань.
                    </h1>
                    <p className={`font-bold min-[3644px]:my-[30px] my-[20px] max-[2377px]:my-[20px]`}>
                        Скільки коштує підключити домашній безлімітний інтернет в Києві?
                    </p>
                    <h1>
                        Ми пропонуємо вигідні тарифи на домашній інтернет та телебачення. Це зручне рішення, оскільки ви одночасно отримуєте швидкісний інтернет, трансляцію всіх телевізійних каналів, безліч фільмів і серіалів у високій якості.
                    </h1>
                    <h1 className={`min-[3644px]:mt-[30px] mt-[20px] max-[2377px]:mt-[20px]`}>
                    Зверніть увагу на тарифи інтернет-провайдера Batyevka.NET:
                    </h1>
                    <ol className={`list-disc list-inside `}>
                        <li>100-in: інтернет зі швидкістю 100 Мегабіт/с зі знижкою 159 грн;</li>
                        <li>500-in: інтернет зі швидкістю 500 Мегабіт/с зі знижкою 169 грн.</li>
                        <li>1000-in: інтернет зі швидкістю 1000 Мегабіт/с зі знижкою 232 грн.</li>
                        <li>2000-in: інтернет зі швидкістю 2000 Мегабіт/с зі знижкою 399 грн.</li>
                        <li>5000-in: інтернет зі швидкістю 5000 Мегабіт/с зі знижкою 699 грн.</li>
                    </ol>
                    <h1>
                        З нашою компанією `підключити тариф домашній безлімітний інтернет для дому дуже легко, просто залишайте заявку на підключення прямо зараз і наш спеціаліст проконсультує по всіх питаннях у найближчий час.
                    </h1>
                    <p className={`font-bold min-[3644px]:my-[30px] my-[20px] max-[2377px]:my-[20px]`}>
                        Які тарифи вигідні для підключення інтернету і телебачення вдома?
                    </p>
                    <h1>
                        На сьогодні, вигідні тарифи для домашнього інтернету від Batyevka.NET дають можливість одночасного підключення телебачення в квартирі або приватному будинку. Ми пропонуємо вам підключити високошвидкісний (до 3000 Мегабіт/с) інтернет, ТБ більше 300 телеканалів і доступ до більше 18 тисяч фільмів і серіалів. І це все буде вам доступне у кращій якості 24 години на добу- комфорт використання сучасних технологій гарантуємо вам ми, компанія Batyevka.NET...
                    </h1>
                </div>
                <div className={`min-[564px]:hidden text-[12px] leading-[18px]`}>
                    <div className={`flex`}>
                        <p className={``} onClick={toggleInfo1Visibility}> Актуальні безлімітні тарифи інтернет провайдерів Києва дають змогу обрати безліч варіантів. <span className={isInfo1Visible ? 'hidden' : ''}>..</span>
                            <span className={`${isInfo1Visible ? '': 'hidden'}`}>Як зробити вірний вибір і підібрати тариф, який не розчарує в перший же місяць користування? Компанія Batyevka.NET запрошує вас звернутися до провайдера, для якого важливий кожний клієнт – гарантуємо індивідуальний підхід до кожного і підбір тарифу, відповідно до ваших вимог та побажань.</span>
                            <ChevronDown className={`inline-flex absolute right-0 h-4 w-4 transition-transform mr-[20px] + ${isInfo1Visible ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`}/>
                        </p>
                    </div>
                    <p className={`font-bold text-[16px] leading-[24px]`}>Скільки коштує підключити домашній безлімітний інтернет в Києві?</p>
                    <div className={`flex`}>
                        <p className={``} onClick={toggleInfo2Visibility}> Ми пропонуємо вигідні тарифи на домашній інтернет та телебачення. Це зручне рішення, оскільки ви одночасно отримуєте швидкісний інтернет, трансляцію всіх телевізійних каналів, безліч фільмів і серіалів у високій якості. <span className={isInfo2Visible ? 'hidden' : ''}>..</span>
                            <span className={`${isInfo2Visible ? '': 'hidden'}`}>
                            <h1>
                                Зверніть увагу на тарифи інтернет-провайдера Batyevka.NET:
                            </h1>
                            <ol className={`list-disc list-inside `}>
                                <li>100-in: інтернет зі швидкістю 100 Мегабіт/с зі знижкою 159 грн;</li>
                                <li>500-in: інтернет зі швидкістю 500 Мегабіт/с зі знижкою 169 грн.</li>
                                <li>1000-in: інтернет зі швидкістю 1000 Мегабіт/с зі знижкою 232 грн.</li>
                                <li>2000-in: інтернет зі швидкістю 2000 Мегабіт/с зі знижкою 399 грн.</li>
                                <li>5000-in: інтернет зі швидкістю 5000 Мегабіт/с зі знижкою 699 грн.</li>
                            </ol>
                            <h1>
                                З нашою компанією `підключити тариф домашній безлімітний інтернет для дому дуже легко, просто залишайте заявку на підключення прямо зараз і наш спеціаліст проконсультує по всіх питаннях у найближчий час.
                            </h1>
                            </span>
                            <ChevronDown className={`inline-flex absolute right-0 h-4 w-4 transition-transform mr-[20px] + ${isInfo2Visible ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`}/>
                        </p>
                    </div>
                    <p className={`font-bold text-[16px] leading-[24px]`}>Які тарифи вигідні для підключення інтернету і телебачення вдома?</p>
                    <div className={`flex`}>
                        <p className={``} onClick={toggleInfo3Visibility}> На сьогодні, вигідні тарифи для домашнього інтернету від Batyevka.NET<span className={isInfo3Visible ? 'hidden' : ''}>...</span>
                            <span className={`${isInfo3Visible ? '': 'hidden'}`}> дають можливість одночасного підключення телебачення в квартирі або приватному будинку. Ми пропонуємо вам підключити високошвидкісний (до 3000 Мегабіт/с) інтернет, ТБ більше 300 телеканалів і доступ до більше 18 тисяч фільмів і серіалів. І це все буде вам доступне у кращій якості 24 години на добу- комфорт використання сучасних технологій гарантуємо вам ми, компанія Batyevka.NET...</span>
                            <ChevronDown className={`inline-flex absolute right-0 h-4 w-4 transition-transform mr-[20px] + ${isInfo3Visible ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaterText;