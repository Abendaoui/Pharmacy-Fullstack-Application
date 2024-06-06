import React from 'react'
import SingleItem from './SingleItem'
const ListProducts = ({ data, grid }) => {
  return (
    <section className='mx-auto max-w-2xl px-4 py-5 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div
        className={`grid grid-cols-2 gap-x-6 gap-y-10 xl:gap-x-8 ${
          grid ? 'xl:grid-cols-3' : ''
        }`}
      >
        {data.map((product) => (
          <SingleItem key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default ListProducts
