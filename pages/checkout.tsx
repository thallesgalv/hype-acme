import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { useEffect } from 'react'
import OrderConfirmedSVG from '../assets/Svg/OrderConfirmedSVG'
import Home from '.'

import Heading from '../components/Heading'
import Section from '../components/Section'
import { useCartContext } from '../contexts/CartContex'

const Checkout: NextPage = () => {
  const { order } = useCartContext()
  const router = useRouter()

  useEffect(() => {
    if (!order.productList?.length) router.push('/')
  }, [])

  if (!order.productList?.length) return <Home />

  return (
    <>
      <Head>
        <title>Acme Inc. | Checkout</title>
        <meta name="description" content="Acme Inc. Checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section moreClasses="lg:w-1/2 mx-auto">
        <Heading text="Compra Realizada" moreClasses="text-center mb-4" />

        <div className="flex justify-center">
          <OrderConfirmedSVG />
        </div>

        <pre className="whitespace-pre-line md:whitespace-pre">
          {JSON.stringify(order, null, '\t')}
        </pre>
      </Section>
    </>
  )
}

export default Checkout
