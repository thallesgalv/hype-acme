import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import toast from 'react-hot-toast'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Product, useProductContext } from './ProductsContext'

interface ResumeProduct {
  id: number
  name: string
  value: number
}

interface Order {
  productList: ResumeProduct[]
  totalValue: number
  orderDate: Date
}

interface CartProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cart: Product[]
  addToCart: (id: number) => void
  removeFromCart: (id: number) => void
  totalCartValue: number
  getOrder: () => void
  order: Order
}

const CartContex = createContext({} as CartContextProps)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([])
  const [totalCartValue, setTotalCartValue] = useState(0)
  const [order, setOrder] = useState<Order>({} as Order)

  const { getProduct } = useProductContext()

  useEffect(() => {
    setTotalCartValue(0)
    cart.forEach(({value}) => {
      if (value < 0) value = value * -1
      setTotalCartValue((state) => state + value)
    })
  }, [cart])

  const addToCart = (id: number) => {
    if (id) {
      const pickedProduct = getProduct(id)

      const containsInCart = cart.find((product) => product === pickedProduct)

      if (containsInCart) {
        toast.error('Erro ao adicionar. O produto já existe no carrinho')
      }

      if (pickedProduct && !containsInCart) {
        setCart([...cart, pickedProduct])
        toast((t) => (
          <div className="flex items-center">
            <span className="flex gap-2 items-center">
              <img
                className="w-16 h-16 rounded-sm"
                src={pickedProduct.imgUrl}
              />
              <p>
                <strong className="text-"> {pickedProduct.name}</strong> {''}
                <span>adicionado ao carrinho.</span>
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

  const removeFromCart = (id: number) => {
    if (id) {
      const pickedProduct = getProduct(id)
      if (pickedProduct) {
        const query = cart.filter((product) => product !== pickedProduct)
        if (query) {
          setCart(query)
          toast((t) => (
            <div className="flex items-center">
              <span className="flex gap-2">
                <img
                  className="w-16 h-16 rounded-sm"
                  src={pickedProduct.imgUrl}
                />
                <p>
                  <strong className="text-"> {pickedProduct.name}</strong> {''}
                  <span>removido do carrinho.</span>
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
  }

  const getOrder = () => {
    if (cart) {
      const resumeCart = cart.map(({ id, name, value }) => {
        return {
          id: id,
          name: name,
          value: value
        }
      })

      setOrder({
        productList: resumeCart,
        totalValue: totalCartValue,
        orderDate: new Date()
      })

      setCart([])
    }
  }

  return (
    <CartContex.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalCartValue,
        getOrder,
        order
      }}
    >
      {children}
    </CartContex.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContex)
}
