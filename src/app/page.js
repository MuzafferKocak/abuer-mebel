import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/BackgroundParticles";
import ImageSlider from "@/components/ImageSlider";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import LivingBanner from "@/components/LivingBanner";
import About from "@/components/About";
import EmailSection from "@/components/EmailSection";
// import PriceCalculator from "@/components/PriceCalculator";

export default function Home() {
  return (
    <main className="relative min-h-screen font-[family-name:var(--font-geist-sans)] ">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ParticlesBackground />
      </div>
      <Navbar />

      <div className="relative container mt-4 mx-auto py-6 px-6 max-w-full ">
        <ImageSlider/>
        <About/>
        <LivingBanner/>
        <ProductCard/>
        <HeroBanner/>
        {/* <PriceCalculator/> */}
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
