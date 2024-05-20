import React, { useState, useEffect } from 'react'
import { SingleProduct, Title } from '../presentational'
import axiosClient from '../../../configs/axiosClient'
const ListMedecines = () => {
  const [data, setData] = useState([])

  const getMedecines = async () => {
    try {
      await axiosClient.get('/medecines', { count: 16 }).then(({ data }) => {
        if (data) {
          setData(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const ITEMS_PER_PAGE = 8
  const [currentPage, setCurrentPage] = useState(0)

  const paginatedMedecines = data.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  )

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  useEffect(() => {
    getMedecines()
  }, [])

  return (
    <section className='bg-white py-12'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <Title>
          Today Best Deals
          <br />
          For You!
        </Title>
        <div
          className={`mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 sm:gap-4 lg:mt-16`}
        >
          {paginatedMedecines.map((medecine) => {
            return <SingleProduct key={medecine.id} {...medecine} />
          })}
        </div>
        {data.length > ITEMS_PER_PAGE && (
          <div className='flex justify-center mt-4 gap-96'>
            <button
              className='bg-gray-200 hover:bg-green-300 transition-all text-gray-800 font-bold py-2 px-4 rounded'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
                />
              </svg>
            </button>
            <button
              className='bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded hover:bg-green-300 transition-all'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage >= Math.ceil(data.length / ITEMS_PER_PAGE) - 1
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ListMedecines
