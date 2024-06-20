'use client'
import React from 'react'
import Image from 'next/image';
import HeroImage from '@/assets/Banner.jpeg'
import { montserrat, nunito } from '@/fonts/fontsNext';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-purple-800 overflow-hidden">
      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <h1 className={`text-6xl font-bold text-white mb-4 ${nunito.className}`}>Encuentra el lugar perfecto para estudiar</h1>
        <p className={`text-xl text-white font-bold mb-8 ${montserrat.className}`}>Descubre departamentos cerca de tu universidad</p>
        <div className="flex justify-center">
          <input type="search" placeholder="Buscar departamento..." className="px-4 py-2 mr-2 rounded-l-lg focus:outline-none" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">Buscar</button>
        </div>
      </div>
      <div className="absolute inset-0 bg-opacity-0 bg-black z-0">
        <Image src={HeroImage} alt="Hero Background" className=" opacity-90 brightness-75 absolute top-[-80px] object-cover inset-0 z-0" />
      </div>
      
    </div>
  );
};

export default Hero;

