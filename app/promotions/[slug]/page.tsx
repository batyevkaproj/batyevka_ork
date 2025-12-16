// app/promotions/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";

import Bandit from "@/components/old/promotions/Bandit";
import Drug from "@/components/old/promotions/Drug";
import Tvthou from "@/components/old/promotions/Tvthou";
import Tvthree from "@/components/old/promotions/Tvthree";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/business-page/ContactForm";

// Типи для Next.js 15: params = Promise<...>
interface PromotionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Мапа slug -> компонент
const promotionComponentsMap: Record<string, React.ComponentType<any>> = {
  bandit: Bandit,
  drug: Drug,
  tvthou: Tvthou,
  tvthree: Tvthree,
};

export async function generateStaticParams() {
  return Object.keys(promotionComponentsMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PromotionPageProps) {
  const { slug } = await params;

  const key = slug.toLowerCase();
  if (!promotionComponentsMap[key]) {
    return { title: "Promotion Not Found" };
  }

  const promotionName = key.charAt(0).toUpperCase() + key.slice(1);

  return {
    title: `${promotionName} Promotion`,
    description: `Check out our special ${promotionName} promotion!`,
  };
}

export default async function PromotionPage({ params }: PromotionPageProps) {
  const { slug } = await params;

  const key = slug.toLowerCase();
  const PromotionComponent = promotionComponentsMap[key];

  if (!PromotionComponent) notFound();

  return (
    <>
      <Header theme={"white"} business={false} />
      <PromotionComponent />
      <ContactForm theme={"white"} />
      <Footer theme={"white"} />
    </>
  );
}
