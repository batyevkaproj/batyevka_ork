import Image from 'next/image';
import action04 from '../../../public/img/promotions/action04.svg'

const Bandit = () => {
  return (
    <div className="min-h-screen bg-white text-promo-gray-text">
      <section className="container mx-auto xl:w-[1222px] px-[15px] sm:px-[25px] lg:px-[50px] py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-[55%] xl:w-1/2 lg:pr-[40px] text-center lg:text-left">
            <h1 className="text-[48px] font-bold text-[#5f6061] leading-[1.1] whitespace-nowrap">
              Акція «БАНДИТ»
            </h1>
            <h2 className="text-[48px] font-bold text-gray-900 leading-[1.1] text-[#dc662d] whitespace-nowrap">
              знижка на абонплату
            </h2>
            <h2 className="text-[48px] font-bold text-gray-900 mb-[25px] leading-[1.06] text-[#dc662d] whitespace-nowrap">
              впродовж 12 місяців!
            </h2>
            <p className="text-[16px] font-semibold text-gray-800 mb-[15px] text=[#5f6061]">
              Всього за 100 грн/міс
            </p>
            <p className="text-promo-gray-text mb-[15px] text-[16px] whitespace-nowrap">
              Ви отримуєте <span className="font-bold text-gray-900 text-[#5f6061]">Інтернет</span> та <span className="font-bold text-gray-900 text-[#5f6061]">Телебачення</span> від медіасервісу <span className="font-bold text-gray-900 text-[#5f6061]">MeGoGo</span>:
            </p>
            <ul className="space-y-[8px] mb-[30px] text-promo-gray-text text-[16px] text-left list-none pl-0">
              <li className="relative pl-[20px] before:content-['-'] before:absolute before:left-0 before:top-[2px] before:text-promo-gray-text before:font-medium">
                безлімітний ІНТЕРНЕТ на швидкості до 300 Мегабіт
              </li>
              <li className="relative pl-[20px] before:content-['-'] before:absolute before:left-0 before:top-[2px] before:text-promo-gray-text before:font-medium">
                170 ТЕЛЕКАНАЛІВ від медіасервісу MeGoGo, серед яких УКРАЇНСЬКІ:
                <br />
                <span className="ml-[5px]">Інтер HD, 5 канал HD, ICTV HD, МИ - УКРАЇНА, 24 канал, УНІАН, Перший, Київ, Forbes, One Planet та інші</span>
              </li>
              <li className="relative pl-[20px] before:content-['-'] before:absolute before:left-0 before:top-[2px] before:text-promo-gray-text before:font-medium">
                6 000 кращого кіно для всієї родини
              </li>
            </ul>
            <button className="h-[60px] w-[255px] inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer ml-[30px] w-full bg-[#DC662D] text-white font-semibold rounded-full shadow-[0_4px_20px_0px_#DC662D50] text-[19px]">
              Відправити заявку
            </button>
          </div>

          <div className="lg:w-[45%] xl:w-1/2 mt-[40px] lg:mt-0 flex justify-center lg:justify-end ml-[150px]">
            <Image
              src={action04}
              alt="Акція Бандит промо"
              width={550}
              height={420}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 px-[15px] sm:px-[25px] lg:px-[50px] relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-[30px] sm:text-[42px] font-bold text-gray-900 text-center mb-[40px] lg:mb-[50px] text-[#5f6061]">
            Акція для нових і колишніх абонентів!
          </h2>

          <div className="grid md:grid-cols-2 mr-[400px]">
            <div className="sm:p-[30px] lg:p-[40px] text-right relative max-w-[400px] justify-self-end">
              <div className='h-[2px] w-[69px] bg-[#dc662d]  left-[365px] top-[62px] absolute'></div>
              <h3 className="text-[30px] font-bold mb-[20px] text-[#dc662d] flex flex-col ">
                <span>Умови акції</span>
                <span>«БАНДИТ»</span>
              </h3>
              <p className="leading-relaxed text-[14px] w-[310px] text-[16px]">
                Учасники Акції – особи, що вперше підключаються до телекомунікаційної мережі Batyevka.NET та колишні абоненти Batyevka.NET, які не користувались послугами 12 і більше місяців, і обирають тариф "UTP-100 + Безкоштовне TV", або "G-PON 300 + Безкоштовне TV".
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg max-w-4xl mx-auto xl:w-[746px] xl:p-[60px]">
              <div className="">
                <h3 className="text-[30px] font-bold mb-[20px] text-[#5f6061]">
                  Суть акції
                </h3>
                <p className="leading-relaxed mb-[25px] text-[16px]">
                  Учасники акції автоматично отримують знижку на абонентну плату на 12 місяців, на тарифі «G-PON 300 + Безкоштовне TV» або «UTP-100 + Безкоштовне TV» абонентна плата складатиме 100 грн./міс. По завершенні Акції Абонплата автоматично зміниться відповідно до діючої вартості тарифу вказаної на сайті. Також абонент буде мати можливість змінити тарифний план на будь-який інший з актуальних.
                </p>
                <h4 className="text-[13.28px] font-bold mb-[8px] text-[#5f6061]">
                  Примітки
                </h4>
                <p className="leading-relaxed text-[16px]">
                  У період дії Акції, Абонент повинен безперервно користуватися послугами та своєчасно їх оплачувати. За порушення цієї умови, дія Акції анулюється. Акція не поширюється на абонентів (квартири), які припинили користуватися послугами Batyevka.NET менше, ніж 12 місяців.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bandit;