import { useState } from 'react';
import { ChevronDown } from "lucide-react";

import type { ThemeProps } from '@/types/Theme';

const WaterText = ({ theme }: ThemeProps) => {
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
        <div className={`min-[3644px]:mt-[180px] mt-[120px] max-[2377px]:mt-[90px] max-[932px]:mt-[60px] max-[680px]:mt-[40px] font-normal ${theme == 'white' ? 'text-[#5F6061]' : 'text-white'}`}>
            <div className={`min-[3644px]:mx-[240px] mx-[170px] max-[2377px]:mx-[120px] max-[1600px]:mx-[85px] max-[1247px]:mx-[67px] max-[932px]:mx-[35px] max-[680px]:mx-[20px]`}>
                <div className={`max-[563px]:hidden text-[20px] leading-[28px] max-[2377px]:leading-[24px] max-[2377px]:text-[16px] min-[3644px]:leading-[42px] min-[3644px]:text-[30px]`}>
                    <h1 className={``}>
                        Інтернет для дому від Batyevka.NET – швидкість, стабільність, інновації!
                    </h1>
                    <h1 className={`min-[3644px]:mt-[30px] mt-[20px] max-[2377px]:mt-[20px]`}>
                        Сучасний світ вимагає надійного та швидкого інтернет-з'єднання. Batyevka.NET – це не просто провайдер, а ваш надійний партнер у світі високошвидкісного інтернету! Завдяки передовим технологіям XGS-PON та G-PON, ми забезпечуємо максимальну швидкість та стабільність підключення.
                    </h1>
                    <p className={`font-bold min-[3644px]:my-[30px] my-[20px] max-[2377px]:my-[20px]`}>
                        Чому обирають Batyevka.NET?
                    </p>
                    <ol className={`list-disc list-inside `}>
                        <li>Швидкість до 10 Гбіт/с – завдяки сучасній технології XGS-PON.</li>
                        <li>Стабільне підключення 24/7 – наша мережа адаптована до можливих відключень електроенергії.</li>
                        <li>Безкоштовний виклик майстра – жодних додаткових платежів за обслуговування!</li>
                        <li>Гнучкі тарифи – обирайте оптимальний варіант для своїх потреб.</li>
                        <li>Якісна техпідтримка 24/7 – наша команда допоможе вирішити будь-яке питання.</li>
                    </ol>
                    <h1 className={`min-[3644px]:mt-[30px] mt-[20px] max-[2377px]:mt-[20px]`}>
                        💡 Важливо! Виклик майстра та усунення несправностей входять у вартість тарифу!
                    </h1>
                    <p className={`font-bold min-[3644px]:my-[30px] my-[20px] max-[2377px]:my-[20px]`}>
                        Інтернет без світла
                    </p>
                    <h1>
                        Batyevka.NET гарантує безперебійний інтернет навіть у разі відключень електроенергії. Наші вузли обладнані потужними акумуляторами, а ключові точки – додатковими генераторами. Це означає, що навіть під час тривалих відключень зв'язок залишається стабільним.
                    </h1>
                    <p className={`font-bold min-[3644px]:my-[30px] my-[20px] max-[2377px]:my-[20px]`}>
                        Як зберегти інтернет-з'єднання без світла?
                    </p>
                    <ol className={`list-disc list-inside `}>
                        <li>Використовуйте джерело безперебійного живлення (UPS) для маршрутизатора.</li>
                        <li>Використовуйте літієві акумулятори LiFePo4, які можуть живити обладнання багато годин.</li>
                    </ol>
                    <p className={`font-bold min-[3644px]:my-[30px] my-[20px] max-[2377px]:my-[20px]`}>
                        Як підключити інтернет від Batyevka.NET?
                    </p>
                    <ol className={`list-disc list-inside `}>
                        <li>Перевірка покриття – дізнайтеся, чи є можливість підключення за вашою адресою.</li>
                        <li>Заявка – залиште заявку на сайті або зателефонуйте нашому оператору.</li>
                        <li>Вибір тарифу – узгодьте оптимальний тарифний план.</li>
                        <li>Підключення – майстер приїде у зручний для вас час і налаштує інтернет.</li>
                    </ol>
                    <p className={`font-bold min-[3644px]:my-[30px] my-[20px] max-[2377px]:my-[20px]`}>
                        Тарифи від Batyevka.NET
                    </p>
                    <h1>
                        Ми пропонуємо вигідні тарифні плани для всіх користувачів – від стандартного підключення до гігабітного інтернету XGS-PON. Крім того, у нас діють спеціальні акції та знижки, які допоможуть заощадити на підключенні.
                    </h1>
                    <h1 className={`min-[3644px]:mt-[30px] mt-[20px] max-[2377px]:mt-[20px]`}>
                        🔹 Вартість підключення залежить від умов конкретного підключення. У деяких випадках діють акції на безкоштовне підключення – слідкуйте за оновленнями!
                    </h1>
                    <p className={`font-bold min-[3644px]:my-[30px] my-[20px] max-[2377px]:my-[20px]`}>
                        Наші переваги:
                    </p>
                    <ol className={`list-disc list-inside `}>
                        <li>Гарантована якість зв'язку – завдяки інноваційному обладнанню.</li>
                        <li>Гнучкість тарифів – можливість зміни плану без додаткових оплат.</li>
                        <li>Ніяких прихованих платежів – всі послуги обслуговування включені у вартість.</li>
                    </ol>
                    <h1 className={`min-[3644px]:mt-[30px] mt-[20px] max-[2377px]:mt-[20px]`}>
                        💙 Приєднуйтесь до Batyevka.NET та отримуйте найкращий інтернет для дому – швидкий, стабільний та безперебійний!
                    </h1>
                </div>
                <div className={`min-[564px]:hidden text-[12px] leading-[18px]`}>
                    <div className={`flex`}>
                        <p className={``} onClick={toggleInfo1Visibility}> Інтернет для дому від Batyevka.NET – швидкість, стабільність, інновації! <span className={isInfo1Visible ? 'hidden' : ''}>..</span>
                            <span className={`${isInfo1Visible ? '' : 'hidden'}`}>Сучасний світ вимагає надійного та швидкого інтернет-з'єднання. Batyevka.NET – це не просто провайдер, а ваш надійний партнер у світі високошвидкісного інтернету! Завдяки передовим технологіям XGS-PON та G-PON, ми забезпечуємо максимальну швидкість та стабільність підключення.</span>
                            <ChevronDown className={`inline-flex absolute right-0 h-4 w-4 transition-transform mr-[20px] + ${isInfo1Visible ? 'rotate-0 text-[#DC662D]' : 'rotate-[-90deg]'}`} />
                        </p>
                    </div>
                    <p className={`font-bold text-[16px] leading-[24px]`}>Чому обирають Batyevka.NET?</p>
                    <div className={`flex`}>
                        <p className={``} onClick={toggleInfo2Visibility}> ✅ Швидкість до 10 Гбіт/с – завдяки сучасній технології XGS-PON. <span className={isInfo2Visible ? 'hidden' : ''}>..</span> </p>
                        <span className={`${isInfo2Visible ? '' : 'hidden'}`}>
                            <ol className={`list-disc list-inside `}>
                                <li>Стабільне підключення 24/7 – наша мережа адаптована до можливих відключень електроенергії.</li>
                                <li>Безкоштовний виклик майстра – жодних додаткових платежів за обслуговування!</li>
                                <li>Гнучкі тарифи – обирайте оптимальний варіант для своїх потреб.</li>
                                <li>Якісна техпідтримка 24/7 – наша команда допоможе вирішити будь-яке питання.</li>
                            </ol>
                            <h1>
                                💡 Важливо! Виклик майстра та усунення несправностей входять у вартість тарифу!
                            </h1>
                        </span>
                        <ChevronDown className={`inline-flex absolute right-0 h-4 w-4 transition-transform mr-[20px] + ${isInfo2Visible ? 'rotate-0 text-[#DC662D]' : 'rotate-[-90deg]'}`} />
                    </div>
                    <p className={`font-bold text-[16px] leading-[24px]`}>Інтернет без світла</p>
                    <div className={`flex`}>
                        <p className={``} onClick={toggleInfo3Visibility}> Batyevka.NET гарантує безперебійний інтернет навіть у разі відключень електроенергії.<span className={isInfo3Visible ? 'hidden' : ''}>...</span>
                            <span className={`${isInfo3Visible ? '' : 'hidden'}`}> Наші вузли обладнані потужними акумуляторами, а ключові точки – додатковими генераторами. Це означає, що навіть під час тривалих відключень зв'язок залишається стабільним.
                            
                            Як зберегти інтернет-з'єднання без світла?
                            🔹 Використовуйте джерело безперебійного живлення (UPS) для маршрутизатора.
                            🔹 Використовуйте літієві акумулятори LiFePo4, які можуть живити обладнання багато годин.
                            
                            💙 Приєднуйтесь до Batyevka.NET та отримуйте найкращий інтернет для дому – швидкий, стабільний та безперебійний!</span>
                            <ChevronDown className={`inline-flex absolute right-0 h-4 w-4 transition-transform mr-[20px] + ${isInfo3Visible ? 'rotate-0 text-[#DC662D]' : 'rotate-[-90deg]'}`} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaterText;