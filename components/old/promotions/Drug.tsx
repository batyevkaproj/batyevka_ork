"use client";

import Image from 'next/image';
import { useModal } from '@/hooks/use-modal-store';
import { useToast } from '@/hooks/use-toast';
import action04 from '../../../public/img/promotions/rocket-post.svg';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#DC662D] mr-3 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const ReferFriendPromo = () => {
  const { onOpen } = useModal();
  const { toast } = useToast();

  const handleOpenModalGeneral = () => {
    try {
      const orderData = {
        internetType: `Заявка з акції «Рекомендуй другу»`,
        internetSpeed: 0,
        internetMeasure: '',
        internetPrice: 0,
        totalMonthlyPrice: 0,
        hasTV: false,
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
      {/* --- Top Section --- */}
      <section className="container mx-auto xl:w-[1222px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="lg:pr-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#1E293B] leading-tight">
              Рекомендуй другу –<br />
              <span className="text-[#DC662D]">отримайте 150 грн на рахунок!</span>
            </h1>
            <p className="mt-6 text-gray-600 max-w-md">
              Рекомендуй другу Batyevka.NET і отримайте 150 грн. на користування послугою доступу в інтернет
            </p>
        <button 
            onClick={handleOpenModalGeneral}
            className="mt-8 h-14 px-10 inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-[#DC662D] text-white font-semibold rounded-full shadow-[0_4px_20px_0px_#DC662D50] hover:bg-orange-600 text-lg">
            Підключити друга
        </button>
          </div>
          <div className="mt-8 lg:mt-0 flex justify-center">
            <Image
              src={action04} // <-- REPLACE THIS WITH YOUR NEW ILLUSTRATION
              alt="Рекомендуй другу промо"
              width={500}
              height={450}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- Bottom Section: Details --- */}
      <section className="container mx-auto xl:w-[1222px] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Умови акції «Рекомендуй другу»</h2>
            <p className="mt-4 text-gray-600">
              Учасники акції - існуючі та потенційні абоненти мережі Batyevka.NET (надалі - Абоненти), що користуються послугами доступу до мережі інтернет (надалі -Послуги) або мають намір ними користуватися і не підпадають під виключення, що вказані у <span className="font-bold">примітках.</span>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">Суть акції</h3>
            <p className="mt-4 text-gray-600">
              Особа, що порекомендувала Послуги (Рекомендодавець), отримує бонус у розмірі 150 грн.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">Механізм проведення акції</h3>
            <ul className="mt-4 space-y-4 text-gray-600">
              <li className="flex items-start"><CheckIcon /><span>Для участі в Акції, Друг подає заявку на підключення та повідомляє про намір взяти участь у Акції, вказує П.І.Б. Рекомендодавця і номер його договору, якщо Рекомендодавець є абонентом мережі.</span></li>
              <li className="flex items-start"><CheckIcon /><span>Якщо Рекомендодавець не абонент мережі, - при поданні заявки на підключення він повідомляє П.І.Б. Друга.</span></li>
              <li className="flex items-start"><CheckIcon /><span>При підключенні Послуги, працівник Batyevka.NET, окрім особистих даних абонента, зазначає в заявці назву акції та дані Рекомендодавця, при підключенні Друга, та дані Друга - при підключення Рекомендодавця.</span></li>
              <li className="flex items-start"><CheckIcon /><span>Бонус зараховується на особисті рахунки Рекомендодавця і Друга протягом 3-х робочих днів після надходження коштів за перший місяць користування послугами від Друга та Рекомендодавця, у разі , якщо він не є абонентом мережі і підключається разом із Другом.</span></li>
              <li className="flex items-start"><CheckIcon /><span>Кількість бонусів за підключених Друзів не обмежено.</span></li>
            </ul>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">Примітки</h3>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>Акція не поширюється на осіб, які проживають в гуртожитку або підключаються за адресою, де є активні абоненти мережі (за винятком квартир, що здаються у найм).</p>
              <p>У Акції не можуть брати участь абоненти, які мають заборгованість за послуги.</p>
              <p>Сума накопичених бонусів по Акції може бути використана на абонентну плату, а також, на додаткові послуги*, у розмірі, що не перевищує 50 відсотків обов'язкового щомісячного платежу**.</p>
            </div>
            <div className="mt-8 text-sm text-gray-500 space-y-2">
              <p>* бонуси не використовуються при розрахунках за обладнання.</p>
              <p>**у період дії Акції, її учасник повинен безперервно користуватися Послугами та своєчасно їх оплачувати, в іншому випадку, бонуси анулюються.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferFriendPromo;