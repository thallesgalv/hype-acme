import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useCartContext } from '../contexts/CartContex'
import LogoAcmeSVG from '../assets/Svg/LogoAcmeSVG'

const Header = () => {
  const { cart } = useCartContext()
  const router = useRouter()

  const cartNumber = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (cartNumber.current) {
      cartNumber.current.classList.add('animate-bounce')
    }
    const animation = setTimeout(() => {
      if (cartNumber.current) {
        cartNumber.current.classList.remove('animate-bounce')
      }
    }, 3500)

    return () => {
      clearTimeout(animation)
    }
  }, [cart])

  return (
    <header className="h-20 w-full p-2 shadow-md bg-white">
      <div className="w-full container mx-auto flex items-center justify-around lg:justify-start">
        <Link href="/">
          <a>
            <div className="w-16 h-16">
              <LogoAcmeSVG />
            </div>
          </a>
        </Link>
        <nav className="lg:m-auto">
          <ul className="flex gap-2">
            <li className="text-md font-primary uppercase text-dark">
              <Link href="/">
                <a
                  className={`flex items-center gap-2 underline underline-offset-4 ${
                    router.pathname === '/'
                      ? 'decoration-primary'
                      : 'decoration-white'
                  }`}
                >
                  Produtos
                </a>
              </Link>
            </li>
            <li className="text-md font-primary uppercase text-dark">
              <Link href="/cart">
                <a
                  className={`flex items-center relative underline underline-offset-4 ${
                    router.pathname === '/cart'
                      ? 'decoration-primary'
                      : 'decoration-white'
                  }`}
                >
                  Carrinho
                  <span
                    className="bg-primary rounded-full flex justify-center text-center items-center text-xs p-1 text-white font-semibold h-5 w-5 absolute -top-1 -right-5 animate-bounce"
                    ref={cartNumber}
                  >
                    {cart.length}
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
