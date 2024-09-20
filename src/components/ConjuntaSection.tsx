import React from 'react'

export default function ConjuntaSection() {
  return (
    <section className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-lg md:text-3xl mb-2 font-light">Compra conjunta</h2>
            <h3 className="mt-2 text-3xl font-medium text-gray-900 sm:text-4xl">
              Accedé a los <span className="text-green-500">mejores precios</span> y productos en packaging biodegradable.
            </h3>
            <p className="mt-4 text-xs text-gray-600">
              Queremos ayudarte a que tu empresa o negocio sea 100% ecológico, 
              por eso si tu consumo mensual de envases es alto, te podés sumar a 
              nuestra próxima importación para bajar costos y asegurarte el stock.
            </p>
            <p className="mt-4 text-xs text-gray-600">
              A través de nuestro servicio de Compra Conjunta podés acceder a 
              todos los modelos y los mejores precios sin límite de cantidad.
            </p>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <img className="w-full rounded-lg shadow-lg aspect-square" src="/home/Conjunta-desktop.png" alt="Packaging products" />
            </div>
            <div className="mt-8 space-y-6">
              {[
                { number: 1, title: 'Elegí modelo y cantidad', description: 'Determiná qué productos te interesan. Si no estás seguro, encargamos una muestra por vos.' },
                { number: 2, title: 'Cotizamos el pedido', description: 'Nos encargamos de realizar la cotización acorde a tu pedido y te la informamos.' },
                { number: 3, title: 'Establecemos fecha de arribo', description: 'Detallamos una fecha de arribo de los Ecoenvases al país aproximada dentro de los 90 días.' }
              ].map((step) => (
                <div key={step.number} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-11 w-11 rounded-full bg-gray-300 text-black border-solid border-2 border-black font-medium text-2xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-900 my-0">{step.title}</h4>
                    <p className="text-xs text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 px-5 text-left">
              <a href={"/contacto"} className="text-black no-underline">Contactanos →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}