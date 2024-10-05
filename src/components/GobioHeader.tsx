import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, X, Menu } from 'lucide-react'

const GobioHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEcoenvaseOpen, setIsEcoenvaseOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleEcoenvase = () => setIsEcoenvaseOpen(!isEcoenvaseOpen)

  const menuItems = [
    { name: 'Ecoenvases', subItems: [
      { name: 'Ver Todo', url: '/ecoenvases' },
      { name: 'Estuches y Bandejas', url: '/productos/estuches-y-bandejas' },
      { name: 'Ensaladeras y bowls', url: '/productos/bowls' },
      { name: 'Vasos', url: '/productos/vasos' },
      { name: 'Platos y cubiertos', url: '/productos/platos-y-cubiertos' },
      { name: 'Bolsas', url: '/productos/bolsas-y-sobres' },
      { name: 'Accesorios', url: '/productos/accesorios-para-cafeteria' },
    ]},
    { name: 'Aliados', url: '/aliados' },
    { name: 'Nosotros', url: '/#nosotros' },
    { name: 'FAQs', url: '/faqs' },
    { name: 'Contacto', url: '/contacto' },
  ]

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href='/'>
              <div className="flex-shrink-0">
                <img alt="Gobio Logo" src="/logo-gobio-dsk.png" className='w-2/3 sm:w-28' />
              </div>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                item.subItems ? (
                  <div key={item.name} className="relative group">
                    <button className="bg-gray-900 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute z-10 w-48 hidden group-hover:block bg-black border border-gray-700 mt-1 rounded-md shadow-lg">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.url}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-700 no-underline"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.url}
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium no-underline"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-base text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              item.subItems ? (
                <div key={item.name}>
                  <button
                    onClick={toggleEcoenvase}
                    className="bg-gray-900 text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isEcoenvaseOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isEcoenvaseOpen && (
                    <div className="pl-4">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.url}
                          className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-sm font-medium no-underline"
                          onClick={toggleMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.url}
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium no-underline"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default GobioHeader