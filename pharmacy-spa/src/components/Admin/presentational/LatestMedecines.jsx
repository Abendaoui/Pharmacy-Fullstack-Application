import React, { useState, useEffect } from 'react'
import TableTitle from './TableTitle'
import List from './List'
import axiosAdmin from '../../../configs/axiosAdmin'
const LatestMedecines = () => {
  const [data, setData] = useState([])
  const getLatestMedecines = async () => {
    try {
      await axiosAdmin.get('/latest_medecines').then(({ data }) => {
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
      <TableTitle link={'/medecines'} title={'Latest Medecines'} />
      <div className='flow-root'>
        <List data={data} withImage={true} />
      </div>
    </article>
  )
}

export default LatestMedecines
