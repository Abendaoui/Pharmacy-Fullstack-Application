import React, { useState, useEffect } from 'react'
import { Title, SingleBrand } from '../presentational'
import axiosClient from '../../../configs/axiosClient'
const ListBrands = () => {
  const [brands, setBrands] = useState([])
  const getBrands = async () => {
    try {
      await axiosClient.get('/brands').then(({ data }) => {
        if (data) {
          setBrands(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBrands()
  }, [])
  return (
    <section className='mx-auto mb-10 max-w-7xl p-5'>
      <Title>Featues Brands</Title>
      <div className='grid grid-cols-2 lg:grid-cols-8 gap-4 p-10 mx-auto'>
        {brands.map((brand) => {
          return <SingleBrand key={brand.id} {...brand} />
        })}
      </div>
    </section>
  )
}

export default ListBrands
