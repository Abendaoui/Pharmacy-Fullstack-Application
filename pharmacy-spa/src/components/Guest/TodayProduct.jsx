import React from 'react'
import { Link } from 'react-router-dom'

const TodayProduct = () => {
  const listOption = [
    {
      id: 1,
      title: 'Provides Essential Nutrients',
    },
    {
      id: 2,
      title: 'High In Fiber',
    },
    {
      id: 3,
      title: 'Low In Fat',
    },
  ]
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div
          className='w-full max-w-7xl bg-[#a0e1e1] shadow-md p-10 lg:p-20 mx-autorelative md:text-left
         rounded-t-3xl'
        >
          <div className='md:flex items-center -mx-10'>
            <div className='w-full md:w-1/2 px-10 mb-10 md:mb-0'>
              <div className='relative'>
                <img
                  src='https://tycoonpackaging.com/wp-content/uploads/2023/08/custom-mini-cereal-boxes.webp'
                  className='w-full relative z-10'
                  alt=''
                  loading='lazy'
                />
                <div className='border-4 border-[#20231e] absolute top-10 bottom-10 left-10 right-10 z-0'></div>
              </div>
            </div>
            <div className='w-full md:w-1/2 px-10'>
              <div className='mb-10 text-[#20231e]'>
                <h1 className='font-bold uppercase text-3xl mb-5'>
                  Cereal Healthy Food
                </h1>
                <p className='text-sm capitalize'>
                  Cereal Food Offers many benefits that make it healthy food and
                  nuturios breakfast choice
                </p>
                <ul className='overflow-hidden mt-4'>
                  {listOption.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className='border-b last:border-none py-4 border-dashed border-[#39a9a9] flex items-center gap-5'
                      >
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-4 h-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5'
                            />
                          </svg>
                        </span>
                        <span className='font-bold text-sm'>{item.title}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <div className='inline-block align-bottom mr-5'>
                  <span className='font-bold text-5xl leading-none align-baseline'>
                    59
                  </span>
                  <span className='text-2xl leading-none align-baseline'>
                    .99
                  </span>
                  <span className='text-3xl leading-none align-baseline'>
                    MAD
                  </span>
                </div>
                <div className='inline-block align-bottom'>
                  <button
                    className='bg-[#20231e]
                   text-[#a0e1e1] rounded-full px-10 py-2 font-semibold'
                  >
                    <i className='mdi mdi-cart -ml-2 mr-2'></i> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Other Flavour */}
        <div className='bg-[#a0e1e1]'>
          <div className='bg-[#ffeb68] p-5 rounded-t-3xl text-center'>
            <Link to={'/products'}>
              <h1 className='text-lg font-bold'>Chocolote Flavour</h1>
            </Link>
          </div>
          <div className='bg-[#fec091] p-5 text-center'>
            <Link to={'/products'}>
              <h1 className='text-lg font-bold'>Oats Flavour</h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodayProduct
