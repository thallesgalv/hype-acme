import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  FormEvent
} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {
  AiOutlineCloseCircle,
  AiFillHeart,
  AiOutlineExclamationCircle
} from 'react-icons/ai'
import { generateProducts } from '../utils/generateProducts'
import { verbs, adjectives } from '../assets/variables'
// import useFetch from '../hooks/useFetch' ⬅ Real Case

export interface Product {
  id: number
  name: string
  description: string
  value: number
  imgUrl: string
  isFavorite: boolean
}

interface ProductsProviderProps {
  children: ReactNode
}

interface ProductsContextProps {
  products: Product[]
  favorites: Product[]
  filteredProducts: Product[]
  setFilteredProducts: (products: Product[]) => void
  handleFavorite: (id: number) => void
  isFavoriteFilterToggled: boolean
  setIsFavoriteFilterToggled: (value: boolean) => void
  searchTerm: string
  handleSearchInputChange: (e: FormEvent<HTMLInputElement>) => void
  handleSearch: (searchTerm: string, data: Product[]) => Product[] | null
  getProduct: (id: number) => Product | undefined
}

const ProductContext = createContext({} as ProductsContextProps)

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([])
  const [favorites, setFavorites] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isFavoriteFilterToggled, setIsFavoriteFilterToggled] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  // Real Case ⬇
  // const { data } = useFetch('https://api.acme.com')

  // Real Case ⬇
  // useEffect(() => {
  //   if (data) setProducts(data)
  // }, [data])

  //Mock Case
  useEffect(() => {
    const currProdcuts = generateProducts(verbs, adjectives)

    axios.get('https://api.github.com/users/thallesgalv').finally(() => {
      if (currProdcuts) setProducts(currProdcuts)
    })
  }, [])

  const handleFavorite = (id: number) => {
    if (products.length) {
      const productQuery = products.find((product) => product.id === id)
      if (productQuery) {
        const newProduct = {
          ...productQuery,
          isFavorite: !productQuery.isFavorite
        }
        const productsUpdated = products.map((p) => {
          if (p === productQuery) {
            return newProduct
          }
          return p
        })

        const filteredProductsUpdated = filteredProducts.map((p) => {
          if (p === productQuery) {
            return newProduct
          }
          return p
        })

        setProducts(productsUpdated)
        setFilteredProducts(filteredProductsUpdated)
        getFavorites(productsUpdated)

        toast((t) => (
          <div className="flex items-center">
            <span className="flex gap-2 items-center">
              <p className="text-white">
                {!productQuery.isFavorite ? (
                  <AiFillHeart />
                ) : (
                  <AiOutlineExclamationCircle />
                )}
              </p>
              <img className="w-16 h-16 rounded-sm" src={productQuery.imgUrl} />
              <p>
                <strong className="text-"> {productQuery.name}</strong>
                <span>
                  {' '}
                  foi{' '}
                  {!productQuery.isFavorite
                    ? 'adicionado aos'
                    : 'removido dos'}{' '}
                  favoritos.
                </span>
              </p>
            </span>
            <button onClick={() => toast.dismiss(t.id)}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        ))
      }
    }
  }

  const getFavorites = (products: Product[]) => {
    if (products.length) {
      const query = products.filter((p) => p.isFavorite)
      if (query) setFavorites(query)
    }
  }

  const handleSearchInputChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      setSearchTerm(e.currentTarget.value)
    },
    [searchTerm]
  )

  const handleSearch = (searchTerm: string, data: Product[]) => {
    if (data.length && searchTerm) {
      const query = data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
      return query
    }
    return null
  }

  const getProduct = (id: number) => {
    if (products.length) {
      return products.find((product) => product.id === id)
    }
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        favorites,
        filteredProducts,
        setFilteredProducts,
        handleFavorite,
        isFavoriteFilterToggled,
        setIsFavoriteFilterToggled,
        searchTerm,
        handleSearchInputChange,
        handleSearch,
        getProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductContext)
}
