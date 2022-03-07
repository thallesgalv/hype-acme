import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { ProductsProvider } from '../contexts/ProductsContext'
import { CartProvider } from '../contexts/CartContex'
import '../styles/globals.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Spinner from '../components/Spinner'
import useMedia from '../hooks/useMedia'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loadingScreen, setLoadingScreen] = useState(false)
  const router = useRouter()
  const isMobile = useMedia('(max-width: 768px)')

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  const handleStart = () => {
    setLoadingScreen(true)
  }

  const handleComplete = () => {
    setLoadingScreen(false)
  }

  return (
    <ProductsProvider>
      <CartProvider>
        <Header />

        {loadingScreen ? (
          <div className="w-screen h-screen flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <Main>
            <Component {...pageProps} />
            <Toaster
              position={`${isMobile ? 'bottom-center' : 'top-right'}`}
              toastOptions={{
                style: {
                  background: '#f97316',
                  color: '#fff'
                }
              }}
            />
          </Main>
        )}
        <Footer />
      </CartProvider>
    </ProductsProvider>
  )
}

export default MyApp
