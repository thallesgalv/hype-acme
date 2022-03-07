import { useEffect } from 'react'
import { useProductContext } from '../contexts/ProductsContext'
import useDebounce from '../hooks/useDebounce'
import Input from './Input'
import Toggle from './Toggle'

const Filters = () => {
  const {
    isFavoriteFilterToggled,
    setIsFavoriteFilterToggled,
    searchTerm,
    handleSearchInputChange,
    products,
    favorites,
    handleSearch,
    setFilteredProducts
  } = useProductContext()

  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm) {
      if (isFavoriteFilterToggled) {
        const query = handleSearch(searchTerm, favorites)
        if (query) setFilteredProducts(query)
      }

      if (!isFavoriteFilterToggled) {
        const query = handleSearch(searchTerm, products)
        if (query) setFilteredProducts(query)
      }
    } else {
      setFilteredProducts([])
    }
  }, [debouncedSearchTerm])

  return (
    <div className="flex-col md:flex-row flex justify-center md:items-center gap-4 my-4">
      <div className="flex gap-2">
        <p className="w-max font-primary text-dark text-base">
          Filtrar por favoritos:
        </p>
        <div
          onClick={() => setIsFavoriteFilterToggled(!isFavoriteFilterToggled)}
        >
          <Toggle />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="🔍 Busque um produto..."
        />
      </div>
    </div>
  )
}

export default Filters
