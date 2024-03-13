import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { ModalProvider } from "@/providers/modal-provider";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Батиївка для бізнесу",
  description: "Відкрийте для себе можливості швідкісного інтернету від Батиївки для бізнесу"
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk-uk" className={montserrat.className}>
      <body className={`bg-[#0E2D43]`}>
        <ModalProvider />
        {children}
        </body>
    </html>
  );
}