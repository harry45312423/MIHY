import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[104px]">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <CertificationsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
