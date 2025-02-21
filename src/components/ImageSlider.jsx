"use client";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/slider/pic1.jpg",
    "/images/slider/pic2.jpg",
    "/images/slider/pic3.jpg",
  ]; // Burada resimlerin yolu olacak

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Sonraki slayta geç
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length // Önceki slayta geç
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 9000); // 3 saniye arayla geçiş
    return () => clearInterval(interval); // Komponent temizlendiğinde interval'i temizle
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Resimleri sola kaydırıyoruz
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-[400px] object-cover flex-shrink-0" // flex-shrink-0 ile kaymayı engelliyoruz
          />
        ))}
      </div>

      {/* Sol Ok Butonu */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
      >
        ◀
      </button>

      {/* Sağ Ok Butonu */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default ImageSlider;