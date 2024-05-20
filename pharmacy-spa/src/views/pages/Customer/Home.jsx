import React from 'react'
import {
  Hero,
  ListMedecines,
  Services,
  ListBrands,
  ListPopularMedecines,
  ListDiscount,
  ListBabyFood,
  TodayProduct,
  Reviews,
  FAQ,
} from '../../../components/Customer/containers'

const Home = () => {
  return (
    <main className=' overflow-x-hidden'>
      <Hero />
      <Services />
      <ListMedecines />
      <ListBrands />
      <ListPopularMedecines />
      {/* <ListDiscount /> */}
      <ListBabyFood />
      <TodayProduct />
      <Reviews />
      <FAQ/>
    </main>
  )
}

export default Home
