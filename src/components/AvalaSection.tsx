import { LeafIcon, RecycleIcon, LightbulbIcon } from 'lucide-react'

export default function AvalaSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <h2 className="text-lg md:text-3xl mb-2 font-light">GoBio Avala</h2>
            <h3 className="mt-2 text-3xl font-medium text-gray-900 sm:text-4xl">
              Desde GoBio queremos reconocer a tu comercio como un{' '}
              <span className="text-green-500 font-bold">aliado para el cambio.</span>
            </h3>
            <p className="text-gray-600 mb-8">
              Por eso, creamos este sello para certificar que tu comercio es:
            </p>
          </div>
          <div className="lg:w-1/2 lg:pr-8">
            <img
              className="w-full rounded-lg"
              src="/home/Avala-mobile.png"
              alt="GoBio product in a cafe setting"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-6 flex justify-center items-center">
            <div className="bg-gray-100 p-4 rounded-lg text-center aspect-square max-w-sm mx-auto flex flex-col items-center">
              <img src='/home/icon-planta.svg' />
              <p className="text-base font-medium text-gray-700 max-w-48">Amigable con el medio ambiente.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center aspect-square max-w-sm mx-auto flex flex-col items-center">
              <img src='/home/icon-reciclado.svg' />
              <p className="text-base font-medium text-gray-700 max-w-48">Utiliza envases biodegradables.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center aspect-square max-w-sm mx-auto flex flex-col items-center">
              <img src='/home/icon-sostenible.svg' />
              <p className="text-base font-medium text-gray-700 max-w-48">Comprometido al cambio sostenible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}