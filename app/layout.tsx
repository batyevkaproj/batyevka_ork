import type { Metadata } from "next";
import "./globals.css";
import localFont from '@next/font/local'


const montserrat = localFont({
  src: [
    {
      path: '../public/fonts/Montserrat/Montserrat-Light.ttf'
    }
  ],
  variable: '--font-montserrat'
})

const montserratBold = localFont({
  src: [
    {
      path: '../public/fonts/Montserrat/Montserrat-Bold.ttf'
    }
  ],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Батиївка для бізнесу",
  description: "Відкрийте для себе можливості швідкісного інтернету від Батиївки для бізнесу"
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk-uk" className={montserrat.className}>
      <body className={`bg-[#0E2D43]`}>{children}</body>
    </html>
  );
}
