import React from 'react'
import {
  Hero,
  Services,
  ListMedecines,
  ListBrands,
  ListPopularMedecines,
  ListBabyFood,
  TodayProduct,
  Reviews,
  FAQ,
  ListDiscount,
} from '../../../components/Guest'

const HomeGuest = () => {
  return (
    <main className=' overflow-x-hidden'>
      <Hero />
      <Services />
      <ListMedecines />
      <ListBrands />
      <ListPopularMedecines />
      <ListDiscount />
      <ListBabyFood />
      <TodayProduct />
      <Reviews />
      <FAQ />
    </main>
  )
}

export default HomeGuest
