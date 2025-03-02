import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 mt-2 mb-2 ">
    <h2 className="text-4xl font-bold text-center text-white mb-2 mt-2">Біз туралы</h2>
    
      <div className="w-full px-6 py-10 bg-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/wohnen1.jpg"
              alt="about"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="text-gray-300">
            <h2 className="text-3xl font-bold mb-4">Біз кімбіз?</h2>
            <p className="mb-4">
              {" "}
              "Үйіңізді бізбен бірге қалыптастырыңыз" ұранымен біз сіздің барлық
              тұрмыстық заттарыңыз бен жиһаздарыңызға қажетті шешімдерді
              ұсынамыз. Біздің жоғары сапалы өнімдерімізбен және тұтынушылардың
              қанағаттануына бағытталған қызмет көрсету тәсілімен үйіңізді
              армандағандай жабдықтауға көмектесеміз.
            </p>
            <p>
              Біз сіздің үйіңізге инновациялық дизайндарымыз бен әр бюджетке
              сәйкес келетін опцияларымызбен құндылық қосамыз. Келіңіздер,
              бізбен бірге үйіңізді көркейтейік!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
