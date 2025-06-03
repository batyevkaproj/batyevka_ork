// app/promotions/[slug]/page.tsx
import { notFound } from 'next/navigation';

// Import your promotion components
// Adjust paths if your tsconfig paths are set up differently
import Bandit from '@/components/old/promotions/Bandit'; // Assuming @/ points to your src or root
import Drug from '@/components/old/promotions/Drug';
import Tvthou from '@/components/old/promotions/Tvthou';
import Tvthree from '@/components/old/promotions/Tvthree';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/business-page/ContactForm';
// Import other promotion components as needed...

// It's good practice to define the types for params
interface PromotionPageProps {
  params: {
    slug: string; // This 'slug' matches the folder name [slug]
  };
}

// A map to associate slugs with their components
const promotionComponentsMap: { [key: string]: React.ComponentType<any> } = {
  bandit: Bandit,
  drug: Drug,
  tvthou: Tvthou,
  tvthree: Tvthree,
  // Add more mappings:
  // 'your-promotion-slug': YourPromotionComponent,
};

// Optional: For SEO and better static generation, tell Next.js which slugs exist
export async function generateStaticParams() {
  const promotionSlugs = Object.keys(promotionComponentsMap);
  return promotionSlugs.map((slug) => ({
    slug: slug,
  }));
}

// Optional: Dynamic metadata for each promotion page
export async function generateMetadata({ params }: PromotionPageProps) {
  const { slug } = params;
  const promotionName = slug.charAt(0).toUpperCase() + slug.slice(1); // Simple capitalization

  if (!promotionComponentsMap[slug]) {
    return {
      title: 'Promotion Not Found',
    };
  }

  return {
    title: `${promotionName} Promotion`,
    description: `Check out our special ${promotionName} promotion!`,
  };
}


export default function PromotionPage({ params }: PromotionPageProps) {
  const { slug } = params;
  const PromotionComponent = promotionComponentsMap[slug.toLowerCase()]; // Ensure slug matching is case-insensitive if needed

  if (!PromotionComponent) {
    notFound(); // This will render the nearest not-found.tsx page or a default 404
  }

  return (
    <>
      <Header theme={'white'} business={false}/>
      <PromotionComponent />
      <ContactForm theme = {'white'}/>
      <Footer theme={'white'}/> 
    </>
  );
}