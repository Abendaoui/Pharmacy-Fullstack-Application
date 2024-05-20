import React from 'react'
import { DataCard } from '../presentational'

const CardsSection = () => {
  const data = [
    {
      id: 1,
      count: 24,
      title: 'New products this week',
      percent: 0,
      bg: '#fec091',
    },
    {
      id: 2,
      count: 2,
      title: 'Visitors this week',
      percent: 0,
      bg: '#a0e1e1',
    },
    {
      id: 3,
      count: 2,
      title: 'User signups this week',
      percent: 0,
      bg: '#ffeb68',
    },
  ]
  return (
    <section className='mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-5'>
      {data.map((card) => {
        return <DataCard key={card.id} {...card} />
      })}
    </section>
  )
}

export default CardsSection
