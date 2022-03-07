import Link from 'next/link'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Product, useProductContext } from '../contexts/ProductsContext'
import { useCartContext } from '../contexts/CartContex'
import { formatMoney } from '../utils/formatMoney'
import { formatString } from '../utils/formatString'
import Button from './Button'
import Section from './Section'

const ShelfItem = ({ id, imgUrl, name, value, isFavorite }: Product) => {
  const { handleFavorite } = useProductContext()
  const { addToCart } = useCartContext()

  return (
    <Section moreClasses="p-4 lg:w-72 flex flex-col items-center gap-2 shadow-sm">
      <div
        onClick={() => handleFavorite(id)}
        className={`cursor-pointer text-xl text-primary self-end ${
          isFavorite ? 'animate-heart' : null
        }`}
      >
        {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
      <div className="flex justify-center items-center md:flex-col gap-3 lg:gap-0">
        <Link href={`/products/${formatString(name)}/${id}`}>
          <img
            src={imgUrl}
            alt={name}
            className="w-32 h-24 md:w-40 md:h-40 cursor-pointer rounded-sm shadow-lg"
          />
        </Link>
        <div className="md:flex md:flex-col md:items-center md:gap-2 md:mt-2">
          <p className="font-primary font-semibold text-dark truncate w-40 md:w-auto">
            {name}
          </p>
          <p className="font-primary font-bold text-lg md:text-xl text-primary">
            {formatMoney(value)}
          </p>
          <div
            onClick={() => addToCart(id)}
            className="hover:scale-105 transition-all"
          >
            <Button text="Adicionar ao carrinho" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ShelfItem
