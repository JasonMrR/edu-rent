import React from 'react';
import Image from 'next/image';
import { FaHeart, FaStar } from 'react-icons/fa';
import ExampleImage from '@/assets/Banner.jpeg';
import { montserrat, roboto } from '@/fonts/fontsNext';

const recentProperties = [
  {
    id: 1,
    name: 'Departamento Moderno',
    location: 'Ciudad Universitaria',
    price: '$500/mes',
    rating: 4.5,
    image: ExampleImage,
  },
  {
    id: 2,
    name: 'Apartamento Lujoso',
    location: 'Centro de la Ciudad',
    price: '$750/mes',
    rating: 4.8,
    image: ExampleImage,
  },
  {
    id: 3,
    name: 'Estudio Agradable',
    location: 'Barrio Norte',
    price: '$450/mes',
    rating: 4.2,
    image: ExampleImage,
  },
  // Agrega más propiedades según sea necesario
];

const RecentProperties = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold text-gray-800 mb-8 ${roboto.className}`}>Recién Llegados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentProperties.map(property => (
            <div key={property.id} className="relative overflow-hidden rounded-xl transition-shadow duration-300">
              <div className="absolute top-4 right-4 z-10">
                <button className="text-red-500 hover:text-red-700">
                  <FaHeart size={24} />
                </button>
              </div>
              <Image
                src={property.image}
                alt={property.name}
                width={500}
                height={400}
                className="w-full h-56 object-cover rounded-3xl"
              />
              <div className="flex flex-col items-start mt-2">
                <div className="w-full flex flex-row justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">{property.name}</h3>
                  <div className="flex justify-between items-center">
                    <FaStar className="text-yellow-500" />
                    <span className="ml-1 text-gray-600">{property.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-blue-600 font-bold">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProperties;
