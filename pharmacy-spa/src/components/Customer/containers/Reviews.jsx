import React from 'react'
import { Title, SingleReview } from '../presentational'
import { reviews } from '../../../data/data'
const Reviews = () => {

  return (
    <section className='bg-white py-12'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <Title>What Our Customers Say</Title>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
          {reviews.map((review) => {
            return <SingleReview key={review.id} {...review} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Reviews
