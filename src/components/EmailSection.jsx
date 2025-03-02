"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
    //   console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      className="relative grid md:grid-cols-2 my-16 md:my-16 py-24 gap-4"
      id="contact"
    >
      {" "}
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
  from-amber-300 to-transparent rounded-full h-60 w-60 sm:h-80 sm:w-80 md:h-80 md:w-80 z-10 blur-lg 
  absolute top-[90%] sm:top-[80%] md:top-[70%] left-4 sm:left-4 md:left-20 transform -translate-x-1/2 -translate-1/2"
      ></div>
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Бізбен хабарласыңы</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          {" "}
          Біз әрқашан жаңа жобаларға, ынтымақтастыққа және қызықты мүмкіндіктерге ашықпыз. Бізге хабарласыңыз, бірге керемет істерді жасайық!
        </p>
        <p className="text-[#adb7be] mb-4 max-w-md">Біздің инстаграмға кіруді ұмытпаңыз</p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.instagram.com/abuer_mebel_almaty" target="_blank">
            <div className="bg-[#121212] rounded-lg flex items-center justify-center w-12 h-12 hover:bg-amber-400 transition-all duration-300">
              <FaInstagram className="text-white w-11 h-11 hover:text-black transition-all duration-300" />
            </div>
          </Link>
          
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-amber-400 text-sm mt-2">
          Электрондық пошта сәтті жіберілді!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-white block mb-1 text-sm font-medium"
              >
                сіздің поштаңыз
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="Электрондық пошта мекенжайыңызды енгізіңіз"
                className="bg-[#121212] border border-[#33353f] placeholder-[#9ca2a9] text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="text-white block mb-1 text-sm font-medium"
              >
                Тақырып
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Тақырып"
                className="bg-[#121212] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-white block mb-1 text-sm font-medium"
              >
                сенің хатың
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#121212] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Бізге хабарласыңыз..."
              />
            </div>

            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              хабарлама жіберу
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
