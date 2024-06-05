import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../../configs/axiosClient'
import { useCart } from '../../../hooks/useCart'
import { NotificationContext } from '../../../contexts/NotificationContext'
const SingleProduct = ({ id, slug, medecine_image, price, name, quantity }) => {
  const { showNotification } = useContext(NotificationContext)

  const { setCartCount, cartCount } = useCart()
  const addToCart = async (id) => {
    const formData = new FormData()
    formData.append('medecine_id', id)
    formData.append('price', price)
    if (quantity < 0) {
      console.log('not found')
      return false
    }
    try {
      const response = await axiosClient.post('/carts', formData)
      if (!response) {
        console.log('Something Went Wrong!')
      }
      if (response.status === 201) {
        showNotification('success', 'Item Add To Cart')
        setCartCount(cartCount + 1)
      }
    } catch (error) {
      showNotification('error', 'Something went wrong!')
    }
  }
  return (
    <article
      className='relative flex flex-col overflow-hidden rounded-lg border shadow-md duration-500
     hover:scale-100 hover:shadow-xl transition-all'
    >
      <Link to={`/products/${id}`} className='aspect-square overflow-hidden'>
        <img
          className='h-full w-full object-contain transition-all duration-300 group-hover:scale-125'
          src={`http://localhost:8000/images/medecines/${medecine_image}`}
          alt={name}
          loading='lazy'
        />
      </Link>
      <div className='absolute top-0 m-2 rounded-full bg-white'>
        {quantity > 0 ? (
          <p className='rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3'>
            Available
          </p>
        ) : (
          <p className='rounded-full bg-red-400 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3'>
            Soon
          </p>
        )}
      </div>
      <div className='my-4 mx-auto flex w-10/12 flex-col items-start justify-between'>
        <div className='mb-2 flex'>
          <p className='mr-3 text-sm font-semibold'>{price}MAD</p>
          <del className='text-xs text-gray-400'>
            {' '}
            {price * (1.5).toFixed(2)} MAD
          </del>
        </div>
        <h3 className='mb-2 text-base text-gray-400 capitalize'>{name}</h3>
      </div>
      {quantity > 0 && (
        <button
          onClick={() => addToCart(id)}
          className='group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600'
        >
          <div className='flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white'>
            Add
          </div>
          <div className='flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white'>
            +
          </div>
        </button>
      )}
    </article>
  )
}

export default SingleProduct
