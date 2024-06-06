import React from 'react'
import  SingleProduct  from './SingleProduct'

const ListSearchedMedecine = ({ data }) => {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div
          className={`mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 sm:gap-4 lg:mt-16`}
        >
          {data.map((medecine) => {
            return <SingleProduct key={medecine.id} {...medecine} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ListSearchedMedecine
