import { LeafIcon, RecycleIcon, LightbulbIcon } from 'lucide-react'

export default function AvalaSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8">
            <img
              className="w-full rounded-lg shadow-lg"
              src="/placeholder.svg?height=400&width=600"
              alt="GoBio product in a cafe setting"
            />
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">GoBio Avala</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Desde GoBio queremos reconocer a tu comercio como un{' '}
              <span className="text-green-500">aliado para el cambio.</span>
            </h3>
            <p className="text-gray-600 mb-8">
              Por eso, creamos este sello para certificar que tu comercio es:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex justify-center items-center">
              {[
                { icon: LeafIcon, text: 'Amigable con el medio ambiente.' },
                { icon: RecycleIcon, text: 'Utiliza envases biodegradables.' },
                { icon: LightbulbIcon, text: 'Comprometido al cambio sostenible.' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg text-center aspect-square max-w-sm mx-auto flex flex-col items-center">
                  <item.icon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-700 max-w-48">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}