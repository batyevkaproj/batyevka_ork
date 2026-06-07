'use client';

import { useState, FormEvent } from 'react';

interface ContactFormProps {
  theme?: 'light' | 'dark';
}

const ContactForm = ({ theme = 'light' }: ContactFormProps) => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isDark = theme === 'dark';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        (event.target as HTMLFormElement).reset();
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
      className={`
        ${isDark
          ? 'bg-[#123853] rounded-[32px] p-8 md:p-12 shadow-2xl min-[2430px]:mx-[170px] max-[2430px]:mx-[120px] max-[1770px]:mx-[85px] max-[1180px]:mx-[67px] max-[650px]:mx-[35px] max-[690px]:mx-[20px] min-[2430px]:mb-[120px] max-[2430px]:mb-[90px] max-[650px]:mb-[60px] max-[690px]:mb-[20px]'
          : 'mx-0 bg-[#F4F2F2]'
        }
        font-normal h-full
        min-[2430px]:mt-[120px] max-[2430px]:mt-[90px] max-[650px]:mt-[60px] max-[690px]:mt-[20px]
        flex flex-col text-center
      `}
      style={{ fontFamily: "'Inter', 'Montserrat', sans-serif" }}
    >
      <h2
        className={`font-extrabold text-[42px] leading-[50px] mt-[60px] min-[2430px]:text-[50px] min-[2430px]:leading-[62px] max-[650px]:text-[24px] max-[650px]:leading-[30px] min-[2430px]:mt-[78px] mx-[60px] ${isDark ? 'text-white' : 'text-[#0E2D43]'}`}
      >
        Простіше обговорити <br className="min-[650px]:hidden" /> деталі по телефону?
      </h2>

      <p
        className={`font-normal text-[24px] mt-[25px] leading-[32px] min-[2430px]:mt-[32px] min-[2430px]:leading-[40px] min-[2430px]:text-[32px] max-[650px]:text-[16px] max-[650px]:leading-[22px] mx-[60px] ${isDark ? 'text-[#BDBDBD]' : 'text-[#5F6061]'}`}
      >
        Залиште ваші контакти —{' '}
        <span className="text-[#DC662D] font-bold">
          ми <br className="min-[650px]:hidden" /> перетелефонуємо
        </span>
      </p>

      {isSuccess ? (
        <div className="flex flex-col items-center justify-center p-8 mt-[50px] mb-[60px] mx-auto">
          <div className={`flex flex-col items-center justify-center p-8 border rounded-3xl w-full max-w-lg shadow-sm ${isDark ? 'bg-white/10 border-white/20' : 'bg-[#FFFFFF] border-[#51B18B]/30'}`}>
            <div className="w-16 h-16 bg-[#51B18B]/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#51B18B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className={`text-2xl font-extrabold mb-2 ${isDark ? 'text-white' : 'text-[#0E2D43]'}`}>Заявку прийнято!</h3>
            <p className={`text-center font-medium ${isDark ? 'text-white/70' : 'text-[#5F6061]'}`}>Очікуйте, наш менеджер зателефонує вам найближчим часом.</p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-[50px] min-[2430px]:mt-[75px] min-[3644px]:mt-[113px] max-[650px]:mt-[30px] min-[2430px]:mb-[78px] mb-[60px] min-[3644px]:mb-[117px] max-[650px]:mb-[32px] min-[2430px]:mx-[78px] mx-[60px] max-[650px]:mx-[32px]"
        >
          <div className="flex min-[2430px]:gap-[60px] max-[2430px]:gap-[45px] max-[1770px]:gap-[28px] max-[1180px]:gap-[22px] max-[540px]:gap-[20px] max-[1000px]:flex-col max-[1000px]:items-center">
            <div className="h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] flex items-center w-3/4">
              <input
                type="text"
                name="name"
                required
                maxLength={50}
                className={`w-full h-full rounded-full text-[16px] leading-[22px] min-[2430px]:text-[20px] min-[3644px]:text-[30px] min-[2430px]:leading-[26px] min-[3644px]:leading-[39px] pl-[22px] min-[2430px]:pl-[28px] min-[3644px]:pl-[42px] focus:outline-none transition-colors ${
                  isDark
                    ? 'bg-transparent border border-[#5984B2] text-white placeholder:text-[#BDBDBD] focus:border-[#56AABF]'
                    : 'bg-[#FFFFFF] border border-[#E6E3E3] text-[#5F6061] placeholder:text-[#BDBDBD] focus:border-[#5984B2] focus:ring-0'
                }`}
                placeholder="Ім'я"
              />
            </div>
            <div className="h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] flex items-center w-3/4">
              <input
                type="tel"
                name="phone"
                required
                maxLength={20}
                className={`w-full h-full rounded-full text-[16px] leading-[22px] min-[2430px]:text-[20px] min-[3644px]:text-[30px] min-[2430px]:leading-[26px] min-[3644px]:leading-[39px] pl-[22px] min-[2430px]:pl-[28px] min-[3644px]:pl-[42px] focus:outline-none transition-colors ${
                  isDark
                    ? 'bg-transparent border border-[#5984B2] text-white placeholder:text-[#BDBDBD] focus:border-[#56AABF]'
                    : 'bg-[#FFFFFF] border border-[#E6E3E3] text-[#5F6061] placeholder:text-[#BDBDBD] focus:border-[#5984B2] focus:ring-0'
                }`}
                placeholder="Телефон"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-3/4 rounded-full h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] font-bold text-white text-[18px] leading-[22px] min-[2430px]:text-[24px] min-[2430px]:leading-[32px] min-[3644px]:text-[36px] min-[3644px]:leading-[48px] transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed ${
                isDark
                  ? 'bg-[#56AABF] hover:brightness-110 shadow-[0_4px_20px_rgba(86,170,191,0.5)]'
                  : 'bg-[#DC662D] hover:bg-[#c45a27] shadow-[0_4px_20px_rgba(220,102,45,0.35)]'
              }`}
            >
              {isSubmitting ? 'Відправка...' : 'Зателефонуйте мені'}
            </button>
          </div>
          {message && (
            <p className={`mt-4 text-sm text-center font-medium ${message.startsWith('Помилка') ? 'text-red-400' : 'text-[#51B18B]'}`}>
              {message}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;