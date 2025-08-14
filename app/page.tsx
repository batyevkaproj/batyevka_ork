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
import SliderHome from '@/components/legacy/SliderHome';
import BatyevkaPage from '@/components/scooter/BatyevkaPage'

function HomeContent() {

  const { onOpen } = useModal();
  const searchParams = useSearchParams();

  useEffect(() => {
    const showCallbackModal = searchParams.get('show_callback_modal');
    if (showCallbackModal === 'true') {
      onOpen("call");
    }
  }, [searchParams, onOpen]);



  return (
    <div className={'min-w-[350px] bg-white'}>
      <Header theme="white" business={false} />
      {/* <ParallaxEffect /> */}
      {/* <SliderHome theme="white" business={false} /> */}
      {/* <Heading text="Ключові переваги для наших бізнес-абонентів" text_size={42}></Heading> */}
      {/* <Advantages /> */}
      {/* <Tarifs /> */}
      {/* <TarifsCountInfo theme="white" /> */}
      <BatyevkaPage/>
      <ContactForm theme="white" />
      {/* white text on hite screen here <InfoBlock /> */}
      <Footer theme='white' />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}