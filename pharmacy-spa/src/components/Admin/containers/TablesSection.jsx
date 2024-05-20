import React from 'react'
import { LatestCustomers, LatestMedecines } from '../presentational'

const TablesSection = () => {
  return (
    <section className='grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4 gap-4'>
      <LatestCustomers />
      <LatestMedecines />
    </section>
  )
}

export default TablesSection
