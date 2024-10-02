import React from 'react'
import { Link } from 'react-router-dom'

const ContactoSection: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {/* Muestras Section */}
          <div className="bg-white px-8 rounded-xl shadow-md justify-center max-w-lg">
            <h2 className="text-xl xs:text-4xl font-medium mb-4 text-center">Muestras</h2>
              <p className="mb-6 lg:mb-12 xl:mx-8 text-sm xs:text-2xl lg:text-lg text-center">Pedinos una muestra del producto que vos quieras.</p>
              <div className="flex justify-center lg:mb-6 xl:mb-6">
                <Link to="/muestra">
                  <button className="bg-black text-white xs:w-48 xs:h-12 xs:text-lg lg:w-44 lg:h-10 px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                    Pedir muestra
                  </button>
                </Link>
              </div>
              <div className="flex justify-center my-4 lg:mt-0">
                <img
                  src="/home/Muestras-home-mobile.png"
                  alt="Muestra de contenedor"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
          </div>

          {/* Contactanos Section */}
          <div className="bg-white px-8 rounded-xl shadow-md justify-center max-w-lg">
            <h2 className="text-xl xs:text-4xl font-medium mb-4 text-center">Contactanos</h2>
            <p className="mb-6  lg:mx-8 text-sm xs:text-2xl lg:text-lg text-center">
              Contactanos para conocer todos sobre nuestros productos y descuentos.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-black text-white xs:w-48 xs:h-12 xs:text-lg lg:w-40 lg:h-10 px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                WhatsApp
              </button>
              <button className="bg-white text-black xs:w-48 xs:h-12 xs:text-lg lg:w-32 lg:h-10 px-6 py-2 rounded-md border border-black hover:bg-gray-100 transition-colors">
                Email
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="/home/Contactanos-home-mobile.png"
                alt="Vista previa de WhatsApp"
                className="w-full mx-auto align-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactoSection