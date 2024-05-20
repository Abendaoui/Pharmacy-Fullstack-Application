import React, { useState, useEffect } from 'react'
import TableTitle from './TableTitle'
import List from './List'
import axiosAdmin from '../../../configs/axiosAdmin'
const LatestCustomers = () => {
  const [data, setData] = useState([])
  const getLatestMedecines = async () => {
    try {
      await axiosAdmin.get('/latest_customers').then(({ data }) => {
        if (data) {
          setData(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getLatestMedecines()
  }, [])
  return (
    <article className='bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full'>
      <TableTitle title={'Latest Customers'} link={'/customers'} />
      <div className='flow-root'>
        {data.length > 0 ? (
          <List data={data} withImage={false} />
        ) : (
          <div className='flex justify-center items-center h-96'>
            <h1>No Customer Found</h1>
          </div>
        )}
      </div>
    </article>
  )
}

export default LatestCustomers
