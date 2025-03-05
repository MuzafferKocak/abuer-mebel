import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative footer border z-0 border-b-transparent border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212] bg-opacity-100">
      <div className="container p-4 flex items-center justify-center gap-4">
      <p className="text-slate-600">
          &copy; {currentYear} All rights reserved.
        </p>
        <div className="w-12 h-12 border-2 border-amber-400 rounded-full overflow-hidden ">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={48}
            height={48}
            className="object-cover"
            style={{
              objectFit: "cover",
              aspectRatio: "1/1",
            }}
          />
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
