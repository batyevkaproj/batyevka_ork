"use client";

import Image from 'next/image';
import { useModal } from '@/hooks/use-modal-store';
import { useToast } from '@/hooks/use-toast';
import action04 from '../../../public/img/promotions/rocket-post.svg';

const Megabit300Promo = () => {
  const { onOpen } = useModal();
  const { toast } = useToast();

  const handleOpenModalGeneral = () => {
    try {
      const orderData = {
        internetType: `Заявка з акції «300 мегабіт для всіх»`,
        internetSpeed: 300,
        internetMeasure: 'Мегабіт',
        internetPrice: 100,
        totalMonthlyPrice: 100,
        hasTV: true,
        hasStaticIP: false,
        prepaidMonths: 0,
        setupPrice: 0,
        routerPrice: 0,
      };
      onOpen("phone-input", { orderData });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Помилка",
        description: "Не вдалося відкрити форму заявки."
      });
    }
  };


  return (
    <div className="min-h-screen bg-white text-gray-700 overflow-x-hidden">
      {/* --- Top Section: "300 мегабіт для всіх!" --- */}
      <section className="container mx-auto xl:w-[1222px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="lg:pr-8">
            <p className="text-gray-500 text-lg">Акція для нових та колишніх абонентів</p>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#DC662D] leading-tight mt-2">
              «300 мегабіт<br />
              для всіх!»
            </h1>
            <p className="mt-6 text-gray-600 max-w-md">
              Підключайся і користуйся тарифом "300 мегабіт для всіх" за 100 грн/міс протягом 4 місяців
            </p>
        <button 
            onClick={handleOpenModalGeneral}
            className="mt-8 h-14 px-10 inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-[#DC662D] text-white font-semibold rounded-full shadow-[0_4px_20px_0px_#DC662D50] hover:bg-orange-600 text-lg">
            Відправити заявку
        </button>
          </div>
          <div className="mt-8 lg:mt-0 flex justify-center">
            <Image
              src={action04} // <-- REPLACE THIS WITH YOUR NEW ROCKET IMAGE
              alt="Акція 300 мегабіт промо"
              width={550}
              height={420}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- Bottom Section: Details --- */}
      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="text-right pt-4 relative">
              {/* Decorative line */}
              <div className="hidden md:block w-16 h-0.5 bg-[#DC662D] absolute top-9 right-[-4rem]"></div>
              <h3 className="text-3xl font-bold mb-6 text-[#DC662D]">
                Умови акції<br />
                «300 мегабіт для всіх»
              </h3>
              <p className="leading-relaxed text-gray-600">
                Учасники Акції- нові абоненти та колишні абоненти, що були користувачами послуг мережі Batyevka.NET за місцем їх надання понад 36 календарних місяців тому, і які підключаються до мережі Batyevka.NET у період дії Акції та обирають тарифний план «300 Мегабіт», і мають технічну можливість підключення до Мережі Batyevka.NET на відповідній швидкості.
              </p>
            </div>

            {/* Right Column (Card) */}
            <div className="bg-white shadow-xl rounded-lg p-8 sm:p-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Суть акції
              </h3>
              <p className="leading-relaxed mb-6 text-gray-600">
                Нові та колишні абоненти, учасники Акції, які підключаються, обирають тарифний план «300 мегабіт для всіх» та мають технічну можливість підключення до Мережі Batyevka.NET на відповідній швидкості - отримують акційну абонентну плату на тарифі «300 мегабіт для всіх» 100 грн/міс протягом 4 місяців.
              </p>
              <h4 className="font-bold mb-2 text-gray-800">
                Примітки
              </h4>
              <p className="leading-relaxed text-gray-600 text-sm">
                Місяць, в якому здійснюється підключення, вважається першим та сплачується абонентом пропорційно кількості днів користування послугою. Акція не поширюється на юридичних осіб та фізичних осіб-підприємців. Умови акції не поширюються на абонентів, які були користувачами послуг мережі Batyevka.NET за місцем їх надання протягом останніх дев'яти календарних місяців. Умови Акції не зберігаються при зміні тарифного плану або припинення користування послугами без активації послуги «Фріз». Акція не поширюється на гуртожитки.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Megabit300Promo;