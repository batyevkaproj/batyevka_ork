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
import BatyevkaPageTwo from '@/components/scooter/BatyevkaPageTwo';
import BatyevkaLandingPage from '@/components/scooter/BatyevkaLandingPage';

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
    <>
      <Header theme="white" business={false} />
      {/* <BatyevkaPageTwo/> */}
      <BatyevkaLandingPage />
      <Footer theme='white' />
    </>
  );
}

export default function Ai() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}