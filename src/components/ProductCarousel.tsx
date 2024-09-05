import React, { useState, useRef, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Define the type for our product data
type ProductData = {
  name: string
  material: string
  slots: string
  size: string
  customizableText: string
  biodegradableText: string
  shippingText: string
  imagePath: string
}

// Sample product data in the specified JSON format
const productData: Record<string, ProductData> = {
  "estuche-950ml": {
    "name": "Estuche 950ml",
    "material": "Bagazo de caña de azucar",
    "slots": "2 compartimentos",
    "size": "24cmx15cmx8cm.",
    "customizableText": "Envase customizable.",
    "biodegradableText": "En 60 días se biodegrada por completo.",
    "shippingText": "Envíos a todo el país",
    "imagePath":"/estuche-950ml.png"
  },
  "estuche-1500ml": {
    "name": "Estuche 1500ml",
    "material": "Bagazo de caña de azucar",
    "slots": "3 compartimentos",
    "size": "23cm x 23cm x 7,5cm",
    "customizableText": "Envase customizable.",
    "biodegradableText": "En 60 días se biodegrada por completo.",
    "shippingText": "Envíos a todo el país",
    "imagePath":"/estuche-1500ml.png"
  },
  "bowl-1500ml": {
    "name": "Bowl 950ml",
    "material": "Bagazo de caña de azucar",
    "slots": "Incluye tapa biodegradable",
    "size": "18cm x 13,5cm x 8cm (alto)",
    "customizableText": "Envase customizable.",
    "biodegradableText": "En 60 días se biodegrada por completo.",
    "shippingText": "Envíos a todo el país",
    "imagePath":"/bowl-950ml.png"
  },
  "bowl-redondo-500ml": {
    "name": "Bowl redondo 500ml",
    "material": "Bagazo de caña de azucar",
    "slots": "Incluye tapa biodegradable",
    "size": "14cm x 9cm x 5cm (alto)",
    "customizableText": "Envase customizable.",
    "biodegradableText": "En 60 días se biodegrada por completo.",
    "shippingText": "Envíos a todo el país",
    "imagePath":"/estuche-950ml.png"
  }
}

export default function ProductDetail() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      const scrollAmount = clientWidth * 0.8 // Scroll 80% of the view width
      const newScrollLeft = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })

      // Update scroll buttons state after scrolling
      setTimeout(() => {
        if (carouselRef.current) {
          setCanScrollLeft(carouselRef.current.scrollLeft > 0)
          setCanScrollRight(carouselRef.current.scrollLeft < carouselRef.current.scrollWidth - carouselRef.current.clientWidth)
        }
      }, 300)
    }
  }

  useEffect(() => {
    const checkScroll = () => {
      if (carouselRef.current) {
        setCanScrollLeft(carouselRef.current.scrollLeft > 0)
        setCanScrollRight(
          carouselRef.current.scrollLeft <
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        )
      }
    }

    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  return (
    <div className="mt-12 p-6">
    <h2 className="text-2xl font-bold mb-4">Otros Productos</h2>
    <div className="relative">
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
      >
        {Object.entries(productData).map(([id, product]) => (
          <a href={`/product/${id}`} key={id} className="snap-start">
            <div className="w-64 flex-shrink-0 border rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <img
                  src={product.imagePath}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.material}</p>
                <p className="text-sm text-gray-500 mt-2">{product.size}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <button 
        onClick={() => scroll('left')} 
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!canScrollLeft}
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={() => scroll('right')} 
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!canScrollRight}
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </div>
  </div>
  )
}