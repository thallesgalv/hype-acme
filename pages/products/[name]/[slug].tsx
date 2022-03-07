import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useProductContext, Product } from '../../../contexts/ProductsContext'
import { useCartContext } from '../../../contexts/CartContex'
import Button from '../../../components/Button'
import ZoomOnHover from '../../../components/ZoomOnHover'
import Heading from '../../../components/Heading'
import Section from '../../../components/Section'
import { formatMoney } from '../../../utils/formatMoney'
import NotFound from '../../404'

const Product: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const [product, setProduct] = useState<Product | null>(null)
  const { getProduct, handleFavorite } = useProductContext()
  const { addToCart } = useCartContext()

  useEffect(() => {
    if (slug) {
      const query = getProduct(+slug)
      query ? setProduct(query) : setProduct(null)
    }
  }, [])

  if (!product) return <NotFound />

  return (
    <>
      <Head>
        <title>Acme Inc. | {product.name}</title>
        <meta
          name="description"
          content={`Acme Inc. ${product.name} ${product.description}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section moreClasses="p-8 flex flex-col lg:flex-row gap-12 animate-show lg:w-max">
        <div className="flex flex-col relative">
          <div
            onClick={() => {
              setProduct({ ...product, isFavorite: !product.isFavorite })
              handleFavorite(product.id)
            }}
            className="
            cursor-pointer text-2xl text-primary self-end
            bg-light rounded-full
            absolute z-10 top-2 right-2 p-1
         "
          >
            <div className={` ${product.isFavorite ? 'animate-heart' : null}`}>
              {product.isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
          </div>
          <ZoomOnHover imageSrc={product.imgUrl} imageName={product.name} />
        </div>
        <div>
          <Heading text={product.name} />

          <p className="font-primary font-light text-3xl text-dark uppercase tracking-tighter my-4">
            {formatMoney(product.value)}
          </p>
          <p className="font-primary lg:max-w-xs my-4">{product.description}</p>
          <div className="w-48 md:w-56 flex m-auto md:m-0 flex-col gap-4">
            <div className="w-full" onClick={() => addToCart(product.id)}>
              <Button big text="Adicionar ao carrinho" />
            </div>
            <Link href="/cart">
              <a>
                <Button big secondary text="Finalizar compra" />
              </a>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Product
