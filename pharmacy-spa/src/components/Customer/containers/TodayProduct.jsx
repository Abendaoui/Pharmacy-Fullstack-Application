import React from 'react'
import { Link } from 'react-router-dom'
import ListOptions from '../presentational/ListOptions'
import { listOption } from '../../../data/data'
const TodayProduct = () => {

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
                    return <ListOptions key={item.id} title={item.title} />
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
