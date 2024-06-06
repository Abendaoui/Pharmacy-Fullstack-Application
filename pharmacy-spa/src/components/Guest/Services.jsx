import React from 'react'
import { SingleService } from '../Customer/presentational'
import { services } from '../../data/data'
const Services = () => {
  return (
    <section className='bg-white py-12 text-gray-700 '>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-4'>
          {services.map((service) => (
            <SingleService key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
