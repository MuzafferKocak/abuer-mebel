"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon,HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Shop",
    path: "#shop",
  },
  {
    title: "Cart",
    path: "#cart",
  },

  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 border border-[#33353F] border-l-transparent border-r-transparent bg-[#121212] bg-opacity-100">
      <div className="relative flex container flex-wrap items-center justify-between mx-auto px-4 py-3 ">
      
        <Link href={"/"} className="text-2xl md:text-5xl border-2 border-amber-400 rounded-full">
          <Image
            src="/images/logo1.jpg"
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
        

        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-amber-400 font-extrabold">Abuer Mebel Almaty</h2>
        
        
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
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
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