import React from 'react'
import { Title, SingleReview } from '../Customer/presentational'
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      title: 'Fast and reliable delivery',
      content:
        'The delivery was super quick, and the packaging was excellent. The medication arrived in perfect condition. I am very satisfied with the service.',
      stars: 5,
      reviewer: 'Alex Brown',
    },
    {
      id: 2,
      title: 'User-friendly interface',
      content:
        'The app is very easy to navigate and use. I found what I needed quickly, and the checkout process was smooth and hassle-free. Great experience overall!',
      stars: 4,
      reviewer: 'Sarah Williams',
    },
    {
      id: 3,
      title: 'Great customer support',
      content:
        'I had an issue with my order, but the customer support team resolved it promptly. They were very courteous and helpful. Highly recommend this pharmacy.',
      stars: 4,
      reviewer: 'David Miller',
    },
    {
      id: 4,
      title: 'Competitive prices',
      content:
        'The prices are very reasonable, and I even found some items cheaper than other places. The discounts and offers are also a nice bonus.',
      stars: 5,
      reviewer: 'James Wilson',
    },
  ]
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
