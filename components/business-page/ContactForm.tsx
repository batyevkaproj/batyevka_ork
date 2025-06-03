// Assuming this is in a file like components/ContactForm.tsx or similar
'use client'; // Add this if using App Router and this component has client-side interactions

import type { ThemeProps } from '@/types/Theme'; // Ensure this path is correct
import { useState, FormEvent } from 'react';

const ContactForm = ({ theme }: ThemeProps) => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', { // Your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`Дякуємо! ${result.message || 'Ми зв\'яжемося з вами найближчим часом.'}`);
        (event.target as HTMLFormElement).reset(); // Clear the form
      } else {
        setMessage(`Помилка: ${result.error || 'Щось пішло не так.'}`);
      }
    } catch (error) {
      setMessage(`Помилка мережі: ${(error as Error).message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`${
        theme == 'white'
          ? 'mx-0 bg-[#2D2A32]'
          : 'rounded-[12px] min-[2430px]:mx-[170px] max-[2430px]:mx-[120px] max-[1770px]:mx-[85px] max-[1180px]:mx-[67px] max-[650px]:mx-[35px] max-[690px]:mx-[20px] bg-[#123853] min-[2430px]:mb-[120px] max-[2430px]:mb-[90px] max-[650px]:mb-[60px] max-[690px]:mb-[20px]'
      } 
        font-normal text-white h-full  
        min-[2430px]:mt-[120px] max-[2430px]:mt-[90px] max-[650px]:mt-[60px] max-[690px]:mt-[20px]
        flex flex-col text-center 
      `}
    >
      <h1
        className={`font-bold text-[42px] leading-[50px] mt-[60px] min-[2430px]:text-[50px] min-[2430px]:leading-[62px] max-[650px]:text-[24px] max-[650px]:leading-[30px] min-[2430px]:mt-[78px] mx-[60px]`}
      >
        Простіше обговорити <br className="min-[650px]:hidden" /> деталі по телефону?
      </h1>

      <p
        className={`font-normal text-[24px] mt-[25px] leading-[32px] min-[2430px]:mt-[32px] min-[2430px]:leading-[40px] min-[2430px]:text-[32px] max-[650px]:text-[16px] max-[650px]:leading-[22px] mx-[60px]`}
      >
        Залиште ваші контакти -{' '}
        <span className={`text-[#DC662D] font-semibold`}>
          ми <br className="min-[650px]:hidden" /> перетелефонуємо
        </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className={`mt-[50px] min-[2430px]:mt-[75px] min-[3644px]:mt-[113px] max-[650px]:mt-[30px] min-[2430px]:mb-[78px] mb-[60px] min-[3644px]:mb-[117px] max-[650px]:mb-[32px] min-[2430px]:mx-[78px] mx-[60px] max-[650px]:mx-[32px]`}
      >
        <div className={`flex min-[2430px]:gap-[60px] max-[2430px]:gap-[45px] max-[1770px]:gap-[28px] max-[1180px]:gap-[22px] max-[540px]:gap-[20px] max-[1000px]:flex-col max-[1000px]:items-center`}>
            <div className="h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] flex items-center w-3/4">
            <input
                type="text"
                name="name"
                required
                maxLength={50} // Added maxLength
                className={`w-full h-full rounded-full text-[16px] leading-[22px] bg-transparent border ${theme == 'white' ? 'border-white placeholder:text-slate-300' : 'border-[#56AABF] placeholder:text-slate-300'} min-[2430px]:text-[20px] min-[3644px]:text-[30px] min-[2430px]:leading-[26px] min-[3644px]:leading-[39px] pl-[22px] min-[2430px]:pl-[28px] min-[3644px]:pl-[42px] focus:ring-2 ${theme == 'white' ? 'focus:ring-[#DC662D]' : 'focus:ring-[#56AABF]'} focus:outline-none`}
                placeholder="Ім’я"
            />
            </div>
            <div className="h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] flex items-center w-3/4">
            <input
                type="tel"
                name="phone"
                required
                maxLength={20} // Added maxLength
                className={`w-full h-full rounded-full text-[16px] leading-[22px] bg-transparent border ${theme == 'white' ? 'border-white placeholder:text-slate-300' : 'border-[#56AABF] placeholder:text-slate-300'} min-[2430px]:text-[20px] min-[3644px]:text-[30px] min-[2430px]:leading-[26px] min-[3644px]:leading-[39px] pl-[22px] min-[2430px]:pl-[28px] min-[3644px]:pl-[42px] focus:ring-2 ${theme == 'white' ? 'focus:ring-[#DC662D]' : 'focus:ring-[#56AABF]'} focus:outline-none`}
                placeholder="Телефон"
            />
            </div>
            
            <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                    theme == 'white'
                    ? 'bg-[#DC662D] shadow-[0_4px_20px_0_#DC662D80] hover:bg-orange-700'
                    : 'bg-[#56AABF] shadow-[0_4px_20px_0_#56AABF80] hover:bg-sky-700'
                } w-3/4 rounded-full h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] text-white text-[18px] leading-[22px] min-[2430px]:text-[24px] min-[2430px]:leading-[32px] min-[3644px]:text-[36px] min-[3644px]:leading-[48px] font-semibold transition-colors duration-150 disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                {isSubmitting ? 'Відправка...' : 'Зателефонуйте мені'}
            </button>
        </div>
        {message && (
          <p className={`mt-4 text-sm text-center ${message.startsWith('Помилка') ? 'text-red-400' : 'text-green-400'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;