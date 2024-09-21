import React, { FunctionComponent, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronDown, Search } from 'lucide-react'
import productsData from '../data/products.json'
import familiesData from '../data/families.json' 
import ProductNameHeader from '../components/ProductNameHeader'
import GobioFooter from '../components/GobioFooter'

interface ProductsPageProps {
  familyId: string;
}

type Product = {
  name: string;
  family: string;
  material: string;
  size: string;
  pack: number;
  observations: string[];
  images: string[];
};

type ProductsData = {
  [key: string]: Product;
};

interface ProductsPageProps {
}

const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
  const navigate = useNavigate()
  const { familyId } = useParams<{ familyId: string }>()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterMaterial, setFilterMaterial] = useState('')
  const [filterFamily, setFilterFamily] = useState('')
  const [filteredProducts, setFilteredProducts] = useState<ProductsData>({})
  const [familyTitle, setFamilyTitle] = useState(''); // State to store family title


  useEffect(() => {
    const filtered = Object.entries(productsData).filter(([key, product]) => {
      const familyMatch = !familyId || product.family_id === familyId
      const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const materialMatch = filterMaterial === '' || product.material === filterMaterial
      const familyFilterMatch = filterFamily === '' || product.family_id === filterFamily
      return familyMatch && nameMatch && materialMatch && familyFilterMatch
    })
    setFilteredProducts(Object.fromEntries(filtered))
    const matchingFamily = familiesData.find(family => family.family_id === familyId);

    // Fetch family title based on familyId
    setFamilyTitle(matchingFamily?.family || 'Familia no encontrada'); // Set default if not found
  }, [familyId, searchTerm, filterMaterial, filterFamily])

  const handleFamilyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFamilyId = event.target.value;
    setFilterFamily(newFamilyId);
    
    // Navigate to the new URL with updated familyId
    navigate(`/productos/${newFamilyId}`);
  };

  const handleProductClick = (key: string) => {
    navigate(`/producto/${key}`)
  }

  const uniqueFamilies = Array.from(new Set(Object.values(productsData).map(product => product.family)))
  const uniqueMaterials = Array.from(new Set(Object.values(productsData).map(product => product.material)))

  return (
    <div className="font-montserrat h-screen max-w-1440>">
      <ProductNameHeader name={familyTitle}/>
      <div className="mx-auto pt-4 div-align-center">
        <div className="relative mb-6 px-4">
          <input
            type="text"
            placeholder="Buscar"
            className="fill-available p-3 pl-10 border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="mb-6 px-4 flex justify-end">
          <select
            id="family_options"
            className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700"
            value={filterFamily}
            onChange={handleFamilyChange}
          >
            <option value="">Familia</option>
            <option value="estuches-y-bandejas">Estuches y Bandejas</option>
            <option value="bowls">Bowls</option>
            <option value="vasos">Vasos</option>
            <option value="cubiertos-y-platos">Cubiertos y Platos</option>
            <option value="bolsas-y-sobres">Bolsas y Sobres</option>
            <option value="accesorios-para-cafeteria">Accesorios para Cafetería</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {Object.entries(filteredProducts).map(([key, product]) => (
            <div className='relative' key={key}>
              <a href={`/producto/${key}`} key={key} className="snap-start no-underline">
              <div className="w-full flex-shrink-0 border rounded-lg overflow-hidden bg-gray-200 my-2">
                <div className="w-full">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-4/5 object-cover"
                  />
                </div>
                <div className="px-2 pb-5">
                  <h3 className="font-medium text-xl sm:text-3xl text-black">{product.name}</h3>
                  <p className="text-lg text-gray-600">{product.material}</p>
                  <p className="text-sm text-gray-500 mt-2">{product.size}</p>
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

export default ProductsPage;