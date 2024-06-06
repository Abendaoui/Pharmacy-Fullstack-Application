import React, { useState, useEffect } from 'react'
import { Title } from '../Customer/presentational'
import axiosClient from '../../configs/axiosClient'
import SingleProduct from './SingleProduct'
const ListBabyFood = () => {
  const [data, setData] = useState([])

  const getMedecines = async () => {
    try {
      await axiosClient.get('/food_baby').then(({ data }) => {
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
    <section className='bg-white py-12'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <Title>
          Baby Food <br />
          Collection
        </Title>
        <div className={`mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:mt-16`}>
          {data.map((medecine) => {
            return <SingleProduct key={medecine.id} {...medecine} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ListBabyFood
