import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/BackgroundParticles";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <main className="relative min-h-screen font-[family-name:var(--font-geist-sans)] ">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ParticlesBackground />
      </div>
      <Navbar />

      <div className="relative container mt-20 mx-auto py-6 px-6 max-w-full ">
        <ImageSlider/>
      </div>
    </main>
  );
}
