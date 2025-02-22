import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative footer border z-0 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212] bg-opacity-100">
      <div className="container p-4 flex items-center justify-between gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden ">
          <Image
            src="/images/"
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

        <p className="text-slate-600">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
