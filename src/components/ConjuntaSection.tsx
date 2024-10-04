import React from 'react'

export default function ConjuntaSection() {
  return (
    <section className='flex justify-center'>
      <div className="w-full max-w-1440 py-6 mdpy-12 md:px-6 sm:px-10 lg:px-8 xl:px-14 bg-gray-100">
        <div className="rounded-2xl bg-gray-100 md:bg-white p-4 lg:pt-0 lg:px-8 2xl:pl-12">
          <div className='flex flex-col items-center lg:flex-row lg:items-start'>
            <div className="lg:w-7/12 lg:pr-8 lg:pt-4">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl mb-2 font-light">Compra conjunta</h2>
              <h3 className="text-2xl xs:text-3xl sm:text-4xl 2xl:text-5xl  mb-8 mt-2 font-medium xl:font-semibold xl:font-leading-11">
                Accedé a los <span className="bg-clip-text text-transparent bg-gradient-to-r from-eco2 to-eco3">mejores precios</span> y productos en packaging biodegradable.
              </h3>
              <p className="mt-4 text-xs xs:text-sm md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-5 md:leading-6 2xl:leading-8">
                Queremos ayudarte a que tu empresa o negocio sea 100% ecológico, 
                por eso si tu consumo mensual de envases es alto, te podés sumar a 
                nuestra próxima importación para bajar costos y asegurarte el stock.
              </p>
              <p className="mt-4 text-xs xs:text-sm md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-5 md:leading-6 2xl:leading-8">
                A través de nuestro servicio de Compra Conjunta podés acceder a 
                todos los modelos y los mejores precios sin límite de cantidad.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 md:w-5/6 lg:w-5/12 lg:flex lg:items-start lg:justify-end">
              <img className="w-full xl:w-5/6 rounded-3xl lg:rounded-b-3xl lg:rounded-t-none aspect-square lg:aspect-auto" src="/home/Conjunta-desktop.png" alt="Packaging products" />
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
                    <div className="flex items-center justify-center h-11 w-11 xs:h-16 xs:w-16 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:h-16 2xl:w-16 rounded-full bg-gray-300 text-black border-solid border-2 border-black font-medium text-2xl xs:text-5xl md:text-4xl 2xl:text-5xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-4 lg:ml-0 lg:mt-8">
                    <h4 className="text-sm xs:text-xl lg:text-base 2xl:text-xl font-semibold text-gray-900 my-0">{step.title}</h4>
                    <p className="text-xs xs:text-base lg:text-xs 2xl:text-base lg:w-3/4 text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-5 text-left">
            <a href={"/contacto"} className="text-black font-semibold no-underline xs:text-xl lg:text-xl">Contactanos →</a>
          </div>
        </div>
      </div>
    </section>
  )
}