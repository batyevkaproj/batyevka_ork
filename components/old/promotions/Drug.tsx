import Image from 'next/image';
import action04 from '../../../public/img/promotions/action01.svg'

const Drug = () => {
  return (
    <div className="min-h-screen bg-white text-promo-gray-text">
      <section className="container mx-auto xl:w-[1222px] px-[15px] sm:px-[25px] lg:px-[50px] py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-[55%] xl:w-1/2 lg:pr-[40px] text-center lg:text-left">
            <h1 className="text-[48px] font-bold text-[#5f6061] leading-[1.1] whitespace-nowrap">
              Рекомендуй другу –
            </h1>
            <h2 className="text-[48px] font-bold text-gray-900 leading-[1.1] text-[#dc662d] whitespace-nowrap">
              отримайте 150 грн на
            </h2>
            <h2 className="text-[48px] font-bold text-gray-900 mb-[25px] leading-[1.06] text-[#dc662d] whitespace-nowrap">
              рахунок!
            </h2>
            <p className="text-[16px] font-semibold text-gray-800 mb-[15px] text=[#5f6061]">
              Рекомендуй другу Batyevka.NET і отримайте 150 грн.
              на користування послугою доступу в інтернет
            </p>
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
          <div className="grid md:grid-cols-2 mr-[400px]">
            <div className="sm:p-[30px] lg:p-[40px] text-right relative max-w-[400px] justify-self-end">
              <div className='h-[2px] w-[69px] bg-[#dc662d]  left-[365px] top-[62px] absolute'></div>
              <h3 className="text-[30px] font-bold mb-[20px] text-[#dc662d] flex flex-col ">
                <span>Умови акції</span>
                <span>«Рекомендуй другу»</span>
              </h3>
              <p className="leading-relaxed text-[14px] w-[310px] text-[16px]">
                Учасники акції - існуючі та потенційні абоненти мережі Batyevka.NET (надалі - Абоненти), що користуються послугами доступу до мережі інтернет (надалі –Послуги) або мають намір ними користуватися і не підпадають під виключення, що вказані у примітках.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg max-w-4xl mx-auto xl:w-[746px] xl:p-[60px]">
              <div className="">
                <h3 className="text-[30px] font-bold mb-[20px] text-[#5f6061]">
                  Суть акції
                </h3>
                <p className="leading-relaxed mb-[25px] text-[16px]">
                  Особа, що порекомендувала Послуги (Рекомендодавець), отримує бонус у розмірі 150 грн.
                </p>
                <h4 className="text-[13.28px] font-bold mb-[8px] text-[#5f6061]">
                  Примітки
                </h4>
                <p className="leading-relaxed text-[16px]">
                  Акція не поширюється на осіб, які проживають в гуртожитку або підключаються за адресою, де є активні абоненти мережі (за винятком квартир, що здаються у найм). У Акції не можуть брати участь абоненти, які мають заборгованість за послуги. Сума накопичених бонусів по Акції може бути використана на абонентну плату, а також, на додаткові послуги*, у розмірі, що не перевищує 50 відсотків обов’язкового щомісячного платежу**. * бонуси не використовуються при розрахунках за обладнання. **у період дії Акції, її учасник повинен безперервно користуватися Послугами та своєчасно їх оплачувати, в іншому випадку, бонуси анулюються.
                </p>
              </div>
            </div>
            <div className="bg-white max-w-4\2xl mx-auto ">
              <h1>Механізм проведення акції</h1>
              <ul className='list-disc'>
                <li>Для участі в Акції, Друг подає заявку на підключення та повідомляє про намір взяти участь у Акції, вказує П.І.Б. Рекомендодавця і номер його договору, якщо Рекомендодавець є абонентом мережі.</li>
                <li>Якщо Рекомендодавець не абонент мережі, - при поданні заявки на підключення він повідомляє П.І.Б. Друга.</li>
                <li>При підключенні Послуги, працівник Batyevka.NET, окрім особистих даних абонента, зазначає в заявці назву акції та дані Рекомендодавця, при підключенні Друга, та дані Друга -при підключення Рекомендодавця.</li>
                <li>Бонус зараховується на особисті рахунки Рекомендодавця і Друга протягом 3-х робочих днів після надходження коштів за перший місяць користування послугами від Друга та Рекомендодавця, у разі , якщо він не є абонентом мережі і підключається разом із Другом.</li>
                <li>Кількість бонусів за підключених Друзів не обмежено.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Drug;