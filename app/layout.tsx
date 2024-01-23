import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["cyrillic-ext", "cyrillic"],
  variable: '--font-montserrat'
});


export const metadata: Metadata = {
  title: "Батиївка для бізнесу",
  description: "Відкрийте для себе можливості швідкісного інтернету від Батиївки для бізнесу"
};

// Montserrat

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk-uk" className={montserrat.variable}>
      <body className={`bg-[#0E2D43]`}>{children}</body>
    </html>
  );
}
