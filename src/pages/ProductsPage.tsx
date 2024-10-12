import React, { FunctionComponent, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import productsData from '../data/products.json'
import familiesData from '../data/families.json' 
import ProductNameHeader from '../components/ProductNameHeader'

type Product = {
  name: string;
  family: string;
  material: string;
  size: string;
  pack: number;
  observations: string[];
  images: string[];
  family_id: string;
};

type ProductsData = {
  [key: string]: Product;
};

interface ProductsPageProps {
  familyId: string;
}

const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
  const navigate = useNavigate()
  const { familyId } = useParams<{ familyId: string }>()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterMaterial, setFilterMaterial] = useState('')
  const [filterFamily, setFilterFamily] = useState(familyId || '')
  const [filteredProducts, setFilteredProducts] = useState<ProductsData>({})
  const [familyTitle, setFamilyTitle] = useState('')

  useEffect(() => {
    const filtered = Object.entries(productsData).filter(([key, product]) => {
      const familyMatch = !familyId || familyId === '*' || product.family_id === familyId
      const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const materialMatch = filterMaterial === '' || product.material === filterMaterial
      const familyFilterMatch = filterFamily === '' || filterFamily === '*' || product.family_id === filterFamily
      return familyMatch && nameMatch && materialMatch && familyFilterMatch
    })
    setFilteredProducts(Object.fromEntries(filtered))
    
    if (familyId === '*' ) {
      setFamilyTitle('Todos los productos')
    } else {
      const matchingFamily = familiesData.find(family => family.family_id === familyId)
      setFamilyTitle(matchingFamily?.family || 'Familia no encontrada')
    }
    
    // Actualiza filterFamily cuando cambia familyId
    setFilterFamily(familyId || '')
  }, [familyId, searchTerm, filterMaterial, filterFamily])

  const handleFamilyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFamilyId = event.target.value
    setFilterFamily(newFamilyId)
    navigate(`/productos/${newFamilyId}`)
  }

  const handleProductClick = (key: string) => {
    navigate(`/producto/${key}`)
  }

  const uniqueMaterials = Array.from(new Set(Object.values(productsData).map(product => product.material)))

  return (
    <div className="font-montserrat bg-gray-100">
      <ProductNameHeader name={familyTitle}/>
      <div className="max-w-1440 mx-auto pt-4 div-align-center bg-white rounded-2xl">
        <div className='flex flex-col md:flex-row w-full'>
          <div className="flex relative mb-6 px-4 md:w-2/3 xl:w-9/12">
            <input
            type="text"
            placeholder="Buscar"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg sm:text-xl"
            value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 sm:text-xl" />
          </div>
          <div className="mb-6 px-4 flex justify-end md:w-1/3 xl:w-3/12">
            <select
              id="family_options"
              className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700 sm:text-xl w-full"
              value={filterFamily}
              onChange={handleFamilyChange}
            >
              <option value="*">Todos los Productos</option>
              <option value="estuches-y-bandejas">Estuches y Bandejas</option>
              <option value="bowls">Bowls</option>
              <option value="vasos">Vasos</option>
              <option value="platos-y-cubiertos">Platos y Cubiertos</option>
              <option value="bolsas-y-sobres">Bolsas y Sobres</option>
              <option value="accesorios-para-cafe">Accesorios para Café</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:mx-4">
          {Object.entries(filteredProducts).map(([key, product]) => (
            <div className='relative' key={key}>
              <a href={key === '*' ? '/producto/' : `/producto/${key}`} className="snap-start no-underline">
                <div className="w-full flex-shrink-0 border rounded-3xl overflow-hidden bg-gray-200 my-2">
                  <div className="w-full">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-4/5 object-cover"
                    />
                  </div>
                  <div className="flex flex-row px-5 pb-5">
                    <div className='w-5/6 text-left'>
                      <h3 className="font-semibold text-gray-800 text-lg sm:text-3xl md:text-lg text-black mb-1">{product.name}</h3>
                      <p className="text-semibold text-gray-700 sm:text-2xl md:text-base mt-2">{product.material}</p>
                      <p className="text-sm text-gray-600 sm:text-2xl md:text-base mb-0">{product.size}</p>
                    </div>
                    <div className='flex items-end w-1/6'>
                      <img src="/home/arrowright1.svg" alt="Ir a producto" className="w-full" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
