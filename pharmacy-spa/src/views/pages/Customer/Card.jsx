import React, { useState, useEffect, useContext } from 'react'
import { SingleCard } from '../../../components/Customer/containers'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../../configs/axiosClient'
import { useCart } from '../../../hooks/useCart'
import { NotificationContext } from '../../../contexts/NotificationContext'
const Card = () => {
  document.title = 'Card'
  const { showNotification } = useContext(NotificationContext)
  const { setCartCount } = useCart()
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const [cards, setCards] = useState([])

  const getCardItems = async () => {
    try {
      await axiosClient.get('/carts').then(({ data }) => {
        if (data) {
          const { totalPrice, carts } = data
          setTotal(totalPrice)
          setCards(carts)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteAll = async () => {
    try {
      const response = await axiosClient.delete('/delete_all_carts')
      if (response.status === 200) {
        showNotification('success', 'All Items Deleted')
        getCardItems()
        setCartCount(0)
      }
    } catch (error) {
      showNotification('error', 'Something went wrong!')
    }
  }

  useEffect(() => {
    getCardItems()
  }, [])

  return (
    <>
      <section className='pt-20 mb-40'>
        <h1 className='mb-10 text-center text-3xl font-bold'>Cart Items</h1>
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
          <div className='rounded-lg md:w-2/3'>
            {cards.length > 0 ? (
              cards.map((cart) => (
                <SingleCard
                  key={cart.id}
                  cartId={cart.id}
                  {...cart.medecine}
                  quantity={cart.quantity}
                  getCardItems={getCardItems}
                />
              ))
            ) : (
              <div className='bg-gray-100 py-5 px-3 rounded-lg shadow-md text-center'>
                <h1 className='text-lg font-medium text-black'>
                  No Item In The Cart
                </h1>
              </div>
            )}
          </div>
          {/* Sub total */}
          {cards.length > 0 && (
            <div className='mt-6 h-full rounded-lg border bg-[#f1f5f9] p-6 shadow-md md:mt-0 md:w-1/3'>
              <div className='mb-2 flex justify-between'>
                <p className='text-gray-700'>Subtotal</p>
                <p className='text-gray-700'>${total}</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-gray-700'>Shipping</p>
                <p className='text-gray-700'>50MAD</p>
              </div>
              <hr className='my-4' />
              <div className='flex justify-between'>
                <p className='text-lg font-bold'>Total</p>
                <div className=''>
                  <p className='mb-1 text-lg font-bold'>{total + 50} MAD</p>
                  <p className='text-sm text-gray-700'>
                    including Shipping Fees
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className='mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-green-50 hover:bg-green-600'
              >
                Check out
              </button>
            </div>
          )}
        </div>
        {cards.length > 0 && (
          <div className='w-full flex items-center'>
            <button
              onClick={deleteAll}
              className='mt-6 rounded-md bg-red-500 py-1.5 font-medium text-green-50 hover:bg-red-600 lg:w-1/3 w-[80%] mx-auto'
            >
              Delete All
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default Card
