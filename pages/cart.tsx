import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { AiOutlineDelete } from 'react-icons/ai'
import { useCartContext } from '../contexts/CartContex'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Section from '../components/Section'
import { formatMoney } from '../utils/formatMoney'
import { formatString } from '../utils/formatString'
import ProductSVG from '../assets/Svg/ProductSVG'

const Cart: NextPage = () => {
  const { cart, removeFromCart, totalCartValue, getOrder } = useCartContext()

  return (
    <>
      <Head>
        <title>Acme Inc. | Carrinho</title>
        <meta name="description" content="Acme Inc. Carrinho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section moreClasses="text-center md:w-1/2 mx-auto animate-show">
        {cart.length ? (
          <div>
            <Heading text="Carrinho" />
            <ul
              className="
            flex flex-col justify-center gap-4
            my-8 md:w-1/2 mx-auto
          "
            >
              {cart.map(({ id, name, imgUrl, value }) => (
                <li
                  key={id}
                  className="
                flex justify-between items-center gap-2

                border-b-2 pb-4"
                >
                  <div className="flex gap-2">
                    <Link href={`/products/${formatString(name)}/${id}`}>
                      <img
                        src={imgUrl}
                        alt={name}
                        className="w-16 h-16 cursor-pointer rounded-sm shadow-lg"
                      />
                    </Link>
                    <div className="flex flex-col text-left ont-primary">
                      <p className="font-primary font-semibold text-dark">
                        {name}
                      </p>
                      <p className="font-bold text-lg md:text-xl text-primary">
                        {formatMoney(value)}
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer text-red-500 text-2xl self-center"
                    onClick={() => removeFromCart(id)}
                  >
                    <AiOutlineDelete />
                  </div>
                </li>
              ))}
              <p className=" text-primary text-2xl font-semibold self-end">
                Total: {formatMoney(totalCartValue)}
              </p>
              <div className="w-48 md:w-56 self-end">
                <Link href="/checkout">
                  <a onClick={() => getOrder()}>
                    <Button big text="Ir para o Checkout" />
                  </a>
                </Link>
              </div>
            </ul>
          </div>
        ) : (
          <div>
            <div className="opacity-50 flex justify-center">
              <ProductSVG />
            </div>
            <p>Não há produtos no carrinho.</p>
            <div className="w-48 my-4 mx-auto">
              <Link href="/">
                <a>
                  <Button big text="Continue comprando" />
                </a>
              </Link>
            </div>
          </div>
        )}
      </Section>
    </>
  )
}

export default Cart
