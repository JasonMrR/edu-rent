'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { rock } from '@/fonts/fontsNext';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={"bg-gray-800 shadow-lg"}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-3xl text-white ${rock.className}`}>EduRent</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 ">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio
              </Link>
              <Link href="/search"className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Buscar
              </Link>
              <Link href="/favorites" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Favoritos
              </Link>
              <Link href="/profile" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mi Perfil
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio
          </Link>
          <Link href="/search" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Buscar
          </Link>
          <Link href="/favorites" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Favoritos
          </Link>
          <Link href="/profile" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Mi Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
