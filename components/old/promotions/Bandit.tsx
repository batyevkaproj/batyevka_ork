"use client";

import Image from 'next/image';
import { useModal } from '@/hooks/use-modal-store';
import { useToast } from '@/hooks/use-toast';
import action04 from '../../../public/img/promotions/rocket-post.svg';

const BanditPromo = () => {
  const { onOpen } = useModal();
  const { toast } = useToast();

  const handleOpenModalGeneral = () => {
    try {
      const orderData = {
        internetType: `Заявка з акції «БАНДИТ»`,
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
      {/* --- Top Section: "Акція «БАНДИТ»" --- */}
      <section className="container mx-auto xl:w-[1222px] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="lg:pr-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#DC662D] leading-tight">
              Акція «БАНДИТ»<br />
              знижка на абонплату<br />
              впродовж 4 місяців!
            </h1>
            <div className="mt-8 space-y-4 text-gray-600">
              <p className="font-bold text-lg">Всього за 100 грн/міс</p>
              <p>
                Ви отримуєте <span className="font-bold">Інтернет</span> та <span className="font-bold">Телебачення</span> від медіасервісу <span className="font-bold">MeGoGo:</span>
              </p>
              <ul className="list-inside space-y-2">
                <li>- безлімітний ІНТЕРНЕТ на швидкості до 300 Мегабіт</li>
                <li>- 170 ТЕЛЕКАНАЛІВ від медіасервісу MeGoGo, серед яких УКРАЇНСЬКІ : Інтер HD, 5 канал HD, ICTV HD, МИ - УКРАЇНА, 24 канал, УНІАН, Перший, Київ, Forbes, One Planet та інші</li>
                <li>- 6 000 кращого кіно для всієї родини</li>
              </ul>
            </div>
        <button 
            onClick={handleOpenModalGeneral}
            className="mt-8 h-14 w-full max-w-xs inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-[#DC662D] text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 text-lg">
            Відправити заявку
        </button>
          </div>
          <div className="mt-8 lg:mt-0 flex justify-center">
            <Image
              src={action04} // <-- REPLACE THIS WITH YOUR NEW IMAGE
              alt="Акція Бандит промо"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 lg:mb-16">
            Акція для нових і колишніх абонентів!
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="text-right pt-4 relative">
              {/* Decorative line */}
              <div className="hidden md:block w-16 h-0.5 bg-[#DC662D] absolute top-9 right-[-4rem]"></div>
              <h3 className="text-3xl font-bold mb-6 text-[#DC662D]">
                Умови акції<br />
                «БАНДИТ»
              </h3>
              <p className="leading-relaxed text-gray-600">
                Учасники Акції – особи, що вперше підключаються до телекомунікаційної мережі Batyevka.NET та колишні абоненти Batyevka.NET, які не користувались послугами 36 і більше місяців, і обирають тариф "UTP-100 + Безкоштовне TV", або "G-PON 300 + Безкоштовне TV".
              </p>
            </div>

            {/* Right Column (Card) */}
            <div className="bg-white shadow-xl rounded-lg p-8 sm:p-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Суть акції
              </h3>
              <p className="leading-relaxed mb-6 text-gray-600">
                Учасники акції автоматично отримують знижку на абонентну плату на 4 місяці, на тарифі «G-PON 300 + Безкоштовне TV» або «UTP-100 + Безкоштовне TV» абонентна плата складатиме 100 грн./міс. По завершенні Акції Абонплата автоматично зміниться відповідно до діючої вартості тарифу вказаної на сайті. Також абонент буде мати можливість змінити тарифний план на будь який інший з актуальних.
              </p>
              <h4 className="font-bold mb-2 text-gray-800">
                Примітки
              </h4>
              <p className="leading-relaxed text-gray-600 text-sm">
                У період дії Акції, Абонент повинен безперервно користуватися послугами та своєчасно їх оплачувати. За порушення цієї умови, дія Акції анулюється. Акція не поширюється на абонентів (квартири), які припинили користуватися послугами Batyevka.NET менше, ніж 36 місяців.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BanditPromo;