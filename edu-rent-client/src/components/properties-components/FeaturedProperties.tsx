import React from "react";
import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";
import ExampleImage from "@/assets/Banner.jpeg";

const featuredProperties = [
  {
    id: 1,
    name: "Apartamento de Lujo",
    location: "Centro Histórico",
    price: "$1000/mes",
    rating: 4.9,
    image: ExampleImage,
  },
  {
    id: 2,
    name: "Estudio Moderno",
    location: "Zona Residencial",
    price: "$600/mes",
    rating: 4.7,
    image: ExampleImage,
  },
  {
    id: 3,
    name: "Casa Amplia",
    location: "Barrio Exclusivo",
    price: "$1200/mes",
    rating: 4.8,
    image: ExampleImage,
  },
  // Agrega más propiedades según sea necesario
];

const FeaturedProperties = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Propiedades Destacadas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="relative overflow-hidden rounded-xl transition-shadow duration-300"
            >
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
                  <h3 className="text-lg font-semibold text-gray-800">
                    {property.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <FaStar className="text-yellow-500" />
                    <span className="ml-1 text-gray-600">
                      {property.rating}
                    </span>
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

export default FeaturedProperties;
