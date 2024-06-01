"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import PlaySoundButton from '../components/PlaySoundButton';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DownloadCVButton from './DownloadCVButton';
import WhatsappIcon from "../../../public/square-whatsapp.svg"; 


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
              <PlaySoundButton /><br />
            <TypeAnimation
              sequence={[
                'Akshar',
                3000, 
                'Web Developer',
                3000, 
                'UX/UI Designer',
                3000,
                'Software Developer',
                3000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p classN ame="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Hi there, passionate professional with a knack for bringing ideas to life - explore my portfolio to see my work!
          </p>
          <div>
          <Router >
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="#/DownloadCVButton"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              <DownloadCVButton />
              </span>
            </Link>

            <Link
              href="https://wa.me/+919726778445"
              target="_blank"
              className="px-7 inline-block ml-5 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
             WhatsApp
            </Link>

            </Router>
          </div>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* bg-[#181818 */}
          <div className="rounded-full ] w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.jpeg"
              alt="hero image"
              className="absolute transform rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={600}
              height={800}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
