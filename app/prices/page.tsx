"use client"


import Header from '@/components/Header'
import Footer from '@/components/Footer';
import CalculatorTarifs from '@/components/business-page/CalculatorTarifs';

export default function Home() {

  return (
    <div className={'min-w-[350px] bg-white'}>
      <Header theme={'white'} business={false}/>
      <CalculatorTarifs theme={'white'}/>
      <Footer theme={'white'}/>
    </div>
  )
}