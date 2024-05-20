import React from 'react'
import { Graph, LatestTransactions } from '../presentational'

const ChartsSection = () => {
  return (
    <section className='w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
      <Graph />
      <LatestTransactions/>
    </section>
  )
}

export default ChartsSection
