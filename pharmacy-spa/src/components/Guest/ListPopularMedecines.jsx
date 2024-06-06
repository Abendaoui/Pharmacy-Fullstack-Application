import React, { useState, useEffect } from 'react'
import { Title, CategoryButton } from '../Customer/presentational'
import axiosClient from '../../configs/axiosClient'
import SingleProduct from './SingleProduct'

const ListPopularMedecines = () => {
  const categories = [
    'skincare',
    'Baby Food',
    'cardiology',
    'neurology',
    'pediatrics',
    'nephrology',
    'urology',
    'vitamin',
  ]
  const [data, setData] = useState([])

  const getMedecines = async () => {
    try {
      await axiosClient.get('/all_medecines').then(({ data }) => {
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
  const [activeCategory, setActiveCategory] = useState('skincare')

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }
  const filteredProducts = data.filter((medecine) => {
    return medecine.category === activeCategory
  })
  return (
    <section className='bg-white py-12 text-gray-700'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <Title>
          Trending Products
          <br />
          For You!
        </Title>
        <div className='flex justify-center flex-wrap mb-4 gap-2 mt-10'>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              activeCategory={activeCategory}
              category={category}
              handleCategoryChange={handleCategoryChange}
            />
          ))}
        </div>
        <div
          className={`mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 sm:gap-4 lg:mt-16`}
        >
          {filteredProducts.map((medecine) => (
            <SingleProduct key={medecine.id} {...medecine} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ListPopularMedecines
