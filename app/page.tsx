"use client"

import React from 'react'
import Header from '@/components/Header'

import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";

import Tarifs from '@/components/business-page/Tarifs';
import ContactForm from '@/components/business-page/ContactForm';
import InfoBlock from '@/components/business-page/InfoBlock';
import Advantages from '@/components/business-page/Advantages';
import Slider from '@/components/business-page/Slider';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';

import Contact from '@/components/business-page/modals/Contact';

import { useState } from 'react';



export default function Home() {

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const [lorems, setComments] = useState([])
  const [lorem, setComment] = useState("lorem")
  //https://www.youtube.com/watch?v=wqHGLjuXuHo
  // const res = await fetch('https://api.api-ninjas.com/v1/loremipsum?paragraphs=1')
  //https://medium.com/@a.pirus/create-a-modal-that-can-be-opened-from-anywhere-in-next-js-13-36f6d0ce1bcf
  const fetchComments = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/loremipsum?paragraphs=1')
    const data = await response.json()
    setComment(data)
    console.log(data)

  }
  return (
    <>

      <div>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-white m-auto p-8">
                        <div className="flex flex-col items-center">
                            <p>Modal content</p>
                            <br/>
                            <Link href={pathname}>
                                <button type="button" className="bg-red-500 text-white p-2">Close Modal</button>
                            </Link>
                        </div>
                    </div>
                </dialog>
            }
        </div>
    
      <Header />
      <div className="p-4">
                <p>Homepage</p>
                <Link href="?modal=true">
                    <button type="button" className="bg-blue-500 text-white p-2">Open Modal</button>
                </Link>
            </div>
      <input type="text" value={lorem} onChange={(e) => setComment(e.target.value)} />
      <button onClick={fetchComments}>
        fetch
      </button>
      <main className={`mx-auto w-[1110px] bg-[#0E2D43]`}>
        <Contact/>
        <Slider />
        <Heading text={'Ключові переваги для наших бізнес абонентів'}></Heading>
        <Advantages />
        <Tarifs />
        <ContactForm />
        <InfoBlock />
      </main>
      <Footer />

    </>
  )
}
