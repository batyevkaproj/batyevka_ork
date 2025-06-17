"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useModal } from "@/hooks/use-modal-store";

import Header from '@/components/Header';
import Tarifs from '@/components/business-page/Tarifs';
import ContactForm from '@/components/business-page/ContactForm';
import InfoBlock from '@/components/business-page/InfoBlock';
import Advantages from '@/components/business-page/Advantages';
import Slider from '@/components/business-page/Slider';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';
import ParallaxEffect from '@/components/ParallaxEffect';
import TarifsCountInfo from '@/components/business-page/TarifsCountInfo';

function Busines() {

  const { onOpen } = useModal();
  const searchParams = useSearchParams();

  useEffect(() => {
    const showCallbackModal = searchParams.get('show_callback_modal');
    if (showCallbackModal === 'true') {
      onOpen("call");
    }
  }, [searchParams, onOpen]);



  return (
    <div className={'min-w-[350px] bg-[#0E2D43]'}>
      <Header theme="dark" business={true} />
      <ParallaxEffect />
      <Slider />
      <Heading text="Ключові переваги для наших бізнес-абонентів" text_size={42}></Heading>
      <Advantages />
      <Tarifs />
      <TarifsCountInfo theme="dark" />
      <ContactForm theme="dark" />
      <InfoBlock />
      <Footer theme='dark' />
    </div>
  );
}

export default function Business() {
  return (
    <Suspense>
      <Busines/>
    </Suspense>
  );
}