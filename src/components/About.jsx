import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 mt-2 mb-2 ">
      <h2 className="text-4xl font-bold text-center text-white mb-2 mt-2">
        Біз туралы
      </h2>

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
              Abuer - Mebel ыңғайлы және стильді интерьер құрудағы сенімді
              серіктесіңіз. Біз Алматыда тапсырыс бойынша ас үй мен жиһаз
              өндіруге маманданамыз; Біз сапаға, эстетикаға және
              функционалдылыққа ерекше мән береміз. Біздің кәсіби команда ең
              батыл идеяларды жүзеге асыруға көмектеседі, сіздің үйіңізге сәйкес
              келетін жиһазды жасайды. Біз тек заманауи материалдармен жұмыс
              істейміз, озық технологияны пайдалана отырып, әрбір бөлшек сізді
              көптеген жылдар бойы қуантады. Біз жеке тәсілді бағалаймыз және
              өлшемдерден бастап дизайнды әзірлеуге, өндіруге және орнатуға
              дейінгі қызметтердің кең спектрін ұсынамыз.
            </p>
            <p>
              Abuer - Mebel хабарласқанда, сіз әдемі және сенімді жиһазды ғана
              емес, сонымен қатар сіздің үйіңіз әрқашан сіз болғыңыз келетін
              орын болып қалатынына сенімді боласыз.
            </p>
            <p>Жайлылықты құруды кәсіпқойларға тапсырыңыз!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
