import React, { useState, useEffect, useContext } from 'react'
import axiosClient from '../../../configs/axiosClient'
import { useParams } from 'react-router'
import { useCart } from '../../../hooks/useCart'
import {
  NotificationContext,
} from '../../../contexts/NotificationContext'

const ShowProductDetails = () => {
  const { showNotification } = useContext(NotificationContext)
  const { cartCount, setCartCount } = useCart()
  const { slug } = useParams()
  const [data, setData] = useState({
    brand: '',
    category: '',
    description: '',
    id: '',
    medecine_image: '',
    name: '',
    price: '',
    quantity: '',
    slug: '',
  })

  const getMedecines = async () => {
    try {
      await axiosClient.get(`/medecines/${slug}`).then(({ data }) => {
        if (data) {
          setData(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMedecines()
  }, [])
  const addToCart = async (id) => {
    const formData = new FormData()
    formData.append('medecine_id', id)
    formData.append('price', data.price)
    if (data.quantity < 0) {
      console.log('not found')
      return false
    }
    try {
      const response = await axiosClient.post('/carts', formData)
      if (!response) {
        console.log('Something Went Wrong!')
      }
      if (response.status === 201) {
        showNotification('success', 'Item added to cart!')
        setCartCount(cartCount + 1)
      }
    } catch (error) {
      showNotification('error', 'Something went wrong!')
    }
  }
  return (
    <section className='text-gray-700 body-font overflow-hidden bg-white'>
      <div className='container px-5 py-24 mx-auto'>
        {/* Product Details */}
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img
            alt='product'
            className='lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'
            src={`http://localhost:8000/images/medecines/${data.medecine_image}`}
          />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest mb-3'>
              <span className='font-bold text-[#262c62]'>Category: </span>
              {data.category}
            </h2>
            <h2 className='text-sm title-font text-gray-500 tracking-widest mb-3'>
              <span className='font-bold text-gray-900'>Brand: </span>
              {data.brand}
            </h2>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
              {data.name}
            </h1>
            <p className='leading-relaxed text-gray-500'>{data.description}</p>
            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
              <div className='flex ml-6 items-center'>
                <div className='relative'></div>
              </div>
            </div>
            <div className='flex'>
              <span className='title-font font-medium text-2xl text-gray-900'>
                {data.price}MAD
              </span>
              <button
                onClick={() => addToCart(data.id)}
                className='flex gap-1 items-center ml-auto text-white bg-[#9fe870] border-0 py-2 px-6 focus:outline-none hover:bg-[#a9e285] rounded'
              >
                Add{' '}
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-4 h-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowProductDetails
