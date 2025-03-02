import React from "react";

const LivingBanner = () => {
  return (
    <section className="relative w-full h-[450px] py-5">
      <img
        src="/images/wohnen.jpg"
        alt="küche"
        className="w-full h-full object-fill"
      />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-10 md:right-10 md:left-auto md:translate-x-0 bg-black bg-opacity-20 px-4 py-2.5 rounded-lg">
        <h2 className="text-amber-400 text-md md:text-2xl font-bold text-center md:text-right">
          Үйіңізді жаңартыңыз, өміріңізді әдемі етіңіз!
        </h2>
      </div>
    </section>
  );
};

export default LivingBanner;
