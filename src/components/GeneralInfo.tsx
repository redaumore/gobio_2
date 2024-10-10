import React from 'react'
import { ArrowRight } from 'lucide-react'

const GeneralInfo: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6 font-light">
        <div className="flex-1 bg-green-100 rounded-3xl p-6 xs:p-12 flex flex-col justify-between">
          <h2 className="text-xl md:text-2xl mb-4 font-medium">
            Te contamos qué sucede cuando compostás, reciclás o desechás nuestros productos.
          </h2>
          <div className="flex items-center justify-end mt-4">
            <a
              href="https://drive.google.com/file/d/1fKv8QbubUMrJgoT93Dcz6r6Ecg4F2mAH/view"
              target='_blank'
              className="text-black flex items-center no-underline md:text-xl font-medium"
            >
              Saber más
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex-1 bg-blue-100 rounded-3xl p-6 xs:p-12 flex flex-col justify-between">
          <h2 className="text-xl mb-4 md:text-2xl font-medium">
            Personalizá tus Ecoenvases. Ofrecemos cuatro opciones de impresión diferentes.
          </h2>
          <div className="flex items-center justify-end mt-4">
            <a
              href="https://drive.google.com/file/d/1A25POpzYn14TwWSYchPzSmnNrIV1Doeu/view"
              target='_blank'
              className="text-black flex items-center no-underline md:text-xl font-medium"
            >
              Saber más
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo