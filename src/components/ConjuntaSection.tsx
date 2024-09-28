import React from 'react'

export default function ConjuntaSection() {
  return (
    <section className='flex justify-center bg-gray-200'>
      <div className="w-full max-w-1440">
        <div className="py-12 px-6 sm:px-10 lg:px-8 rounded-2xl bg-white">
          <div className='flex flex-col lg:flex-row items-center'>
            <div className="lg:w-1/2 lg:pr-8">
              <h2 className="xs:text-3xl sm:text-2xl md:text-3xl mb-2 font-light">Compra conjunta</h2>
              <h3 className="text-xl xs:text-4xl sm:text-4xl mb-8 mt-2 font-medium">
                Accedé a los <span className="text-green-500">mejores precios</span> y productos en packaging biodegradable.
              </h3>
              <p className="mt-4 text-xs xs:text-xl text-gray-600">
                Queremos ayudarte a que tu empresa o negocio sea 100% ecológico, 
                por eso si tu consumo mensual de envases es alto, te podés sumar a 
                nuestra próxima importación para bajar costos y asegurarte el stock.
              </p>
              <p className="mt-4 text-xs xs:text-xl text-gray-600">
                A través de nuestro servicio de Compra Conjunta podés acceder a 
                todos los modelos y los mejores precios sin límite de cantidad.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 md:w-5/6 lg:w-1/2">
              <img className="w-full rounded-4xl shadow-lg aspect-square" src="/home/Conjunta-desktop.png" alt="Packaging products" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-8 md:mt-12 space-y-6 lg:space-y-0">
            {[
              { number: 1, title: 'Elegí modelo y cantidad', description: 'Determiná qué productos te interesan. Si no estás seguro, encargamos una muestra por vos.' },
              { number: 2, title: 'Cotizamos el pedido', description: 'Nos encargamos de realizar la cotización acorde a tu pedido y te la informamos.' },
              { number: 3, title: 'Establecemos fecha de arribo', description: 'Detallamos una fecha de arribo de los Ecoenvases al país aproximada dentro de los 90 días.' }
            ].map((step) => (
              <div key={step.number}>
                <div className="flex lg:flex-col">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-11 w-11 xs:h-24 xs:w-24 md:w-20 md:h-20 lg:w-12 lg:h-12 rounded-full bg-gray-300 text-black border-solid border-2 border-black font-medium text-2xl xs:text-6xl lg:text-4xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-4 lg:ml-0 lg:mt-8">
                    <h4 className="text-sm xs:text-3xl lg:text-lg font-semibold text-gray-900 my-0">{step.title}</h4>
                    <p className="text-xs xs:text-2xl lg:text-sm lg:w-3/4 text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-5 text-left">
            <a href={"/contacto"} className="text-black font-semibold no-underline xs:text-3xl lg:text-xl">Contactanos →</a>
          </div>
        </div>
      </div>
    </section>
  )
}