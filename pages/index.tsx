import type { NextPage } from 'next'
import Head from 'next/head'
import { useProductContext } from '../contexts/ProductsContext'
import Shelf from '../components/Shelf'
import Filters from '../components/Filters'
import Spinner from '../components/Spinner'

const Home: NextPage = () => {
  const {
    products,
    favorites,
    isFavoriteFilterToggled,
    filteredProducts,
    searchTerm,
  } = useProductContext()

  return (
    <>
      <Head>
        <title>Acme Inc. | Produtos</title>
        <meta name="description" content="Acme Inc." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Filters />

      <div className="flex flex-wrap gap-2 w-full">

      {!products.length && (
          <div className="w-screen h-screen flex justify-center items-center">
            <Spinner />
          </div>
        )}

        {!searchTerm && <Shelf data={isFavoriteFilterToggled ? favorites : products} />}
        {searchTerm && <Shelf data={filteredProducts.length ? filteredProducts : []} />}
      </div>
    </>
  )
}

export default Home
