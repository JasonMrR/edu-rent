import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">Sobre Nosotros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Nuestros Servicios</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                Alquiler de departamentos cerca de universidades.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                Servicio de búsqueda personalizada.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                Soporte 24/7 para estudiantes.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                Gestión de pagos y contratos.
              </li>
            </ul>
          </div>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Nuestras Ventajas</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                Propiedades verificadas y seguras.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                Amplia variedad de opciones para diferentes presupuestos.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                Proceso de alquiler rápido y sencillo.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                Opiniones y reseñas de otros estudiantes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
