import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { rock } from '@/fonts/fontsNext';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className={`text-3xl font-bold ${rock.className}`}>EduRent</h1>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/" className="hover:text-gray-400">Inicio
            </Link>
            <Link href="/search" className="hover:text-gray-400">Buscar
            </Link>
            <Link href="/favorites" className="hover:text-gray-400">Favoritos
            </Link>
            <Link href="/profile" className="hover:text-gray-400">Mi Perfil
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 EduRent. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
