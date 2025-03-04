"use client";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/slider/slider1.jpg",
    "/images/slider/slider2.jpg",
    "/images/slider/slider3.jpg",
    "/images/slider/slider4.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10">
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden mt-10 mb-2 ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-[450px] object-fill flex-shrink-0 rounded-lg"
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-1 rounded-full"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-1 rounded-full"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
