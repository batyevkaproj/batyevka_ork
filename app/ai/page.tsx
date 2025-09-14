"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useModal } from "@/hooks/use-modal-store";


import Header from '@/components/Header';

import Footer from '@/components/Footer';

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