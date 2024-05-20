import React from 'react'
import {
  CardsSection,
  ChartsSection,
  TablesSection,
} from '../../../components/Admin/containers'

const Dashboard = () => {
  return (
    <main className='pt-6 px-4'>
      {/* StatistiQues */}
      <CardsSection />
      {/* Chart */}
      <ChartsSection />
      {/* Tables */}
      <TablesSection />
    </main>
  )
}

export default Dashboard
