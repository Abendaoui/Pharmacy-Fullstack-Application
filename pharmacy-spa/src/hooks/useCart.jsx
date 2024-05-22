import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

export const useCart = () => {
  const { cartCount, setCartCount } = useContext(CartContext)
  return { cartCount, setCartCount }
}
