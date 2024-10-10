import React from 'react';
import { Link } from 'react-router-dom';

const ContactoSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-200 py-12">
      <div className="px-6 lg:px-8">
        <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0 justify-center">
          {/* Muestras Section */}
          <div className="bg-white px-6 sm:p-8 rounded-3xl shadow-md flex flex-col items-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-2xl lg:text-3xl font-medium mb-4 text-center">Muestras</h2>
            <p className="mb-6 lg:mb-8 text-sm xs:text-lg sm:text-xl md:text-base lg:text-lg text-center max-w-md">
              Pedinos una muestra de los productos que vos quieras.
            </p>
            <div className="mb-6">
              <Link to="/muestra">
                <button className="bg-black text-white w-full xs:w-48 h-10 xs:h-12 text-xs xs:text-sm px-6 py-2 rounded-md hover:bg-gray-800 transition-colors font-montserrat">
                  Pedir Muestra
                </button>
              </Link>
            </div>
            <div className="flex w-full mb-8 justify-center">
              <img
                src="/home/Muestras-home-mobile.png"
                alt="Muestra de contenedor"
                className="w-full max-w-sm mx-auto object-cover"
              />
            </div>
          </div>

          {/* Contactanos Section */}
          <div className="bg-white px-6 sm:px-8 rounded-3xl shadow-md flex flex-col items-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-2xl lg:text-3xl md:pt-8 font-medium mb-4 text-center">Contactanos</h2>
            <p className="mb-6 lg:mb-8 text-sm xs:text-lg sm:text-xl md:text-base lg:text-lg text-center max-w-md">
              Contactanos para conocer todo sobre nuestros productos y descuentos.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <Link to="https://gobio.mkt1.com.ar/form/" target="_blank">
                <button className="bg-black text-white w-32 xs:w-36 h-10 xs:h-12 text-xs xs:text-sm px-4 py-0.2 rounded-md hover:bg-gray-800 transition-colors font-montserrat">
                  Enviar Mensaje
                </button>
              </Link>
              <Link to="https://gobio.mkt1.com.ar/" target="_blank">
                <button className="bg-white text-black w-32 xs:w-46 h-10 xs:h-12 text-xs xs:text-sm px-4 py-0.2 rounded-md border border-black hover:bg-gray-100 transition-colors font-montserrat">
                  Descargar Catálogo
                </button>
              </Link>
            </div>
            <div className="flex w-full justify-center">
              <img
                src="/home/Contactanos-home-mobile.png"
                alt="Vista previa de WhatsApp"
                className="w-full max-w-sm mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
