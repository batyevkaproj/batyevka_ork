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
import OpticCable from '@/components/business-page/OpticCable';



export default function Home() {

  const [lorems, setComments] = useState([])
  const [lorem, setComment] = useState("lorem")
  //https://www.youtube.com/watch?v=wqHGLjuXuHo
  // const res = await fetch('https://api.api-ninjas.com/v1/loremipsum?paragraphs=1')
  //https://medium.com/@a.pirus/create-a-modal-that-can-be-opened-from-anywhere-in-next-js-13-36f6d0ce1bcf
  const fetchComments = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/loremipsum?paragraphs=1')
    const data = await response.json()
    setComment(data)
  }
  return (
    <div className={'min-w-[350px]'}>
      <Header />
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
