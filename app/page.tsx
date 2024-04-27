"use client"

import { useState } from 'react';

import Header from '@/components/Header'
import Tarifs from '@/components/business-page/Tarifs';
import ContactForm from '@/components/business-page/ContactForm';
import InfoBlock from '@/components/business-page/InfoBlock';
import Advantages from '@/components/business-page/Advantages';
import Slider from '@/components/business-page/Slider';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';
import ParallaxDemo from '@/components/ParallaxDemo';
import OpticCable from '@/components/business-page/OpticCable';

export default function Home() {
  return (
    <div className={'min-w-[350px]'}>
      <Header />
      <ParallaxDemo />
      <Slider />
      <Heading text={'Ключові переваги для наших бізнес-абонентів'} text_size={42}></Heading>
      <Advantages />
      <Tarifs />
      <ContactForm />
      {<InfoBlock />}
      
      <Footer />
    </div>
  )
}