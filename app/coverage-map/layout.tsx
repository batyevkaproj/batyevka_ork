import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Карта покриття енергонезалежного інтернету XGS-PON | Batyevka.NET',
  description:
    'Перевірте можливість підключення до гігабітного інтернет-провайдера Batyevka.NET за вашою адресою у Києві. Технологія XGS-PON, понад 100 годин без світла.',
  keywords: [
    'карта покриття інтернет',
    'перевірити інтернет за адресою',
    'XGS-PON Київ',
    'GPON Солом\'янський район',
    'енергонезалежний інтернет Київ',
    'Батиєва Гора інтернет',
    'Batyevka.NET покриття',
    'підключити інтернет Київ',
  ],
  openGraph: {
    title: 'Карта покриття XGS-PON | Batyevka.NET — Енергонезалежний інтернет',
    description:
      'Введіть адресу та дізнайтеся, чи доступний гігабітний інтернет у вашому будинку. XGS-PON до 10 Гбіт/с, акція від 150 грн/міс.',
    url: 'https://batyevka.net/coverage-map',
    siteName: 'Batyevka.NET',
    locale: 'uk_UA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://batyevka.net/coverage-map',
  },
};

export default function CoverageMapLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
