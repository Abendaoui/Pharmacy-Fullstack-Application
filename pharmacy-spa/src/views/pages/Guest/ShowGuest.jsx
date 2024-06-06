import React, { useState, useEffect, useContext } from 'react'
import axiosClient from '../../../configs/axiosClient'
import { useParams } from 'react-router'
import { useCart } from '../../../hooks/useCart'
import { NotificationContext } from '../../../contexts/NotificationContext'

const ShowGuest = () => {
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
      await axiosClient.get(`/getmedecine/${slug}`).then(({ data }) => {
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowGuest
