import React, { useContext } from 'react'
import axiosClient from '../../../configs/axiosClient'
import { useCart } from '../../../hooks/useCart'
import { NotificationContext } from '../../../contexts/NotificationContext'
import { Link } from 'react-router-dom'
const SingleCard = ({
  cartId,
  medecine_image,
  name,
  brand,
  quantity,
  price,
  getCardItems,
  id
}) => {
  const { showNotification } = useContext(NotificationContext)
  const { cartCount, setCartCount } = useCart()
  const deleteItemsCard = async () => {
    try {
      const response = await axiosClient.delete(`/carts/${cartId}`)
      if (response.status === 200) {
        showNotification('success', 'Item Removed From Cart')
        setCartCount(cartCount - 1)
        getCardItems()
      }
    } catch (error) {
      showNotification('error', 'Something went wrong!')
    }
  }
  return (
    <article className='justify-between mb-6 rounded-lg bg-[#f1f5f9] p-6 shadow-md sm:flex sm:justify-start'>
      <Link to={`/products/${id}`}>
        <img
          src={`http://localhost:8000/images/medecines/${medecine_image}`}
          alt='product-image'
          className='w-full rounded-lg sm:w-40'
          loading='lazy'
        />
      </Link>
      <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
        <div className='mt-5 sm:mt-0'>
          <h2 className='text-lg font-bold text-gray-900 capitalize'>{name}</h2>
          <p className='mt-1 text-xs text-gray-700'>{brand}</p>
        </div>
        <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
          <div className='flex items-center border-gray-100'>
            <input
              className='h-8 w-8 border bg-white text-center text-xs outline-none'
              type='number'
              value={quantity}
              readOnly
            />
          </div>
          <div className='flex items-center space-x-4'>
            <p className='text-sm'>{+price * quantity.toFixed(0)}MAD</p>
            <button onClick={deleteItemsCard}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-5 w-5 cursor-pointer duration-150 text-red-500 hover:text-red-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SingleCard
