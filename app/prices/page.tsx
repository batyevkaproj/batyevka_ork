"use client"


import Header from '@/components/Header'
import Footer from '@/components/Footer';
import CalculatorTarifs from '@/components/business-page/CalculatorTarifs';
import AdditionalOptions from '@/components/business-page/AdditionalOptions';
import TarifsCountInfo from '@/components/business-page/TarifsCountInfo';
import WaterText from '@/components/business-page/WaterText';
import ContactForm from '@/components/business-page/ContactForm';
import { useEffect } from 'react';


export default function Home() {
  
  return (
    <div className={'min-w-[350px] bg-white'}>
      <Header theme={'white'} business={false}/>
      <CalculatorTarifs theme={'white'}/>
      <AdditionalOptions theme={'white'}/>
      <TarifsCountInfo theme={"white"}/>
      <WaterText theme={'white'}/>
      <ContactForm theme = {'white'}/>
      <Footer theme={'white'}/>
    </div>
  )
}