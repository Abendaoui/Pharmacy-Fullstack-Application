import React from 'react'
import { createContext, useState, useEffect } from 'react'
import axiosClient from '../configs/axiosClient'
const CartContext = createContext({
  cartCount: null,
  setCartCount: () => {},
})

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await axiosClient.get('/count')
        setCartCount(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCartCount()
  }, [])

  const decrease = () => {
    setCartCount(cartCount - 1)
  }
  const increase = () => {
    setCartCount(cartCount - 1)
  }

  return (
    <CartContext.Provider
      value={{ cartCount, setCartCount, decrease, increase }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }
