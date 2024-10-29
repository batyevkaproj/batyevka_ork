import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { ModalProvider } from "@/providers/modal-provider";
import { Montserrat } from 'next/font/google';
import BinotelScripts from "@/components/BinotelScripts";

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
      <body>
        <ModalProvider />
        {children}
        <Toaster />
        <BinotelScripts />
        </body>
    </html>
  );
}