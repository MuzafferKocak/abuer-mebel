"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "Біз туралы",
    path: "#about",
  },
  // {
  //   title: "Shop",
  //   path: "#shop",
  // },
  {
    title: "жобалар",
    path: "#cart",
  },

  {
    title: "байланысу",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(()=> setActive(null), 800); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    default: { opacity: 0, width: "0%" },
    active: { opacity: 1, width: "100%" },
  };

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 border border-[#33353F] border-l-transparent border-r-transparent bg-[#121212] bg-opacity-100">
      <div className="relative flex container flex-wrap items-center justify-between mx-auto px-4 py-3 ">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl border-2 border-amber-400 rounded-full"
        >
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={48}
            height={48}
            className="object-cover rounded-full"
            style={{
              objectFit: "cover",
              aspectRatio: "1/1",
            }}
          />
        </Link>

        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-amber-400 font-extrabold">
          Abuer Mebel Almaty
        </h2>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} onClick={() => setActive(link.path)} className="relative">
                <NavLink href={link.path} title={link.title} />
                <motion.div
                  initial="default"
                  animate={active === link.path ? "active" : "default"}
                  variants={variants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-[4px] bg-cyan-400 mt-2 mr-3 absolute left-0 bottom-0 w-full"
                ></motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
