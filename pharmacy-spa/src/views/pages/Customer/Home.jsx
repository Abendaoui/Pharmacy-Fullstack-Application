import React from 'react'
import {
  Hero,
  ListMedecines,
  Services,
  ListBrands,
  ListPopularMedecines,
  ListBabyFood,
  TodayProduct,
  Reviews,
  FAQ,
} from '../../../components/Customer/containers'

const Home = () => {
  document.title = 'Home'
  return (
    <main className=' overflow-x-hidden'>
      <Hero />
      <Services />
      <ListMedecines />
      <ListBrands />
      <ListPopularMedecines />
      <ListBabyFood />
      <TodayProduct />
      <Reviews />
      <FAQ />
    </main>
  )
}

export default Home
