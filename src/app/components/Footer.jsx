"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from 'react';



const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Image
          src="/images/Logos/A-logo.png"
          alt="logo" 
          width={100}
          height={100}
           />
        </span>
        <div className="flex flex-col items-center space-y-2">
          <div className="text-center">
            <p className="text-2xl font-semibold text-white">Akshar Patel</p>
            <p className="text-lg text-gray-500">Full Stack Developer</p>
          </div>
          <div className="text-center text-gray-500">
            <p>© {currentYear} AksharPatel</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
