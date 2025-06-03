import Image from 'next/image';
import action04 from '../../../public/img/promotions/rocket-post.svg'

const Tvthou = () => {
  return (
    <div className="min-h-screen bg-white text-promo-gray-text">
      <section className="container mx-auto xl:w-[1222px] px-[15px] sm:px-[25px] lg:px-[50px] py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-[55%] xl:w-1/2 lg:pr-[40px] text-center lg:text-left">
            <h2 className="text-[48px] font-bold text-gray-900 leading-[1.1] text-[#dc662d] whitespace-nowrap">
              «300 мегабіт
            </h2>
            <h2 className="text-[48px] font-bold text-gray-900 mb-[25px] leading-[1.06] text-[#dc662d] whitespace-nowrap">
              для всіх!»
            </h2>
            <p className="text-[16px] font-semibold text-gray-800 mb-[15px] text=[#5f6061]">
              Підключайся і користуйся тарифом "300 мегабіт для всіх" за 100 грн/міс протягом 12 місяців
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
          <h2 className="text-[30px] sm:text-[42px] font-bold text-gray-900 text-center mb-[40px] lg:mb-[50px] text-[#5f6061]">
            Акція для нових і колишніх абонентів!
          </h2>

          <div className="grid md:grid-cols-2 mr-[400px]">
            <div className="sm:p-[30px] lg:p-[40px] text-right relative max-w-[400px] justify-self-end">
              <div className='h-[2px] w-[69px] bg-[#dc662d]  left-[365px] top-[62px] absolute'></div>
              <h3 className="text-[30px] font-bold mb-[20px] text-[#dc662d] flex flex-col ">
                <span>Умови акції</span>
                <span>«300 мегабіт для всіх»</span>
              </h3>
              <p className="leading-relaxed text-[14px] w-[310px] text-[16px]">
                Учасники Акції- нові абоненти та колишні абоненти, що були користувачами послуг мережі Batyevka.NET за місцем їх надання понад дев'яти календарних місяців тому, і які підключаються до мережі Batyevka.NET у період дії Акції та обирають тарифний план «300 Мегабіт», і мають технічну можливість підключення до Мережі Batyevka.NET на відповідній швидкості.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg max-w-4xl mx-auto xl:w-[746px] xl:p-[60px]">
              <div className="">
                <h3 className="text-[30px] font-bold mb-[20px] text-[#5f6061]">
                  Суть акції
                </h3>
                <p className="leading-relaxed mb-[25px] text-[16px]">
                  Нові та колишні абоненти, учасники Акції, які підключаються, обирають тарифний план «300 мегабіт для всіх» та мають технічну можливість підключення до Мережі Batyevka.NET на відповідній швидкості - отримують акційну абонентну плату на тарифі «300 мегабіт для всіх» 100 грн/міс протягом 12 місяців.
                </p>
                <h4 className="text-[13.28px] font-bold mb-[8px] text-[#5f6061]">
                  Примітки
                </h4>
                <p className="leading-relaxed text-[16px]">
                  Місяць, в якому здійснюється підключення, вважається першим та сплачується абонентом пропорційно кількості днів користування послугою. Акція не поширюється на юридичних осіб та фізичних осіб-підприємців. Умови акції не поширюються на абонентів, які були користувачами послуг мережі Batyevka.NET за місцем їх надання протягом останніх дев'яти календарних місяців. Умови Акції не зберігаються при зміні тарифного плану або припинення користування послугами без активації послуги «Фріз». Акція не поширюється на гуртожитки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tvthou;