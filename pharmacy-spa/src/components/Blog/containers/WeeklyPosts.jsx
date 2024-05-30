import React from 'react'
import { WeeklyPostsTitle } from '../presentational'

const WeeklyPosts = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className='2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto'>
        {/* Title */}
        <WeeklyPostsTitle tag={'Weekly'} title={'This Week Posts'} />
        <article className='lg:flex items-stretch md:mt-12 mt-8'>
          {/* Left Side */}
          <article className='lg:w-1/2'>
            {/* First two Images 01 & 02 */}
            <div className='sm:flex items-center justify-between xl:gap-x-8 gap-x-6'>
              {/* Image Article 01 */}
              <article className='sm:w-1/2 relative'>
                <div>
                  <p className='p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>
                    12 April 2021
                  </p>
                  <div className='absolute bottom-0 left-0 p-6'>
                    <h2 className='text-xl font-semibold 5 text-white'>
                      The Decorated Ways 01
                    </h2>
                    <p className='text-base leading-4 text-white mt-2'>
                      Dive into minimalism
                    </p>
                    <a
                      href='javascript:void(0)'
                      className='focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'
                    >
                      <p className='pr-2 text-sm font-medium leading-none'>
                        Read More
                      </p>
                      <svg
                        className='fill-stroke'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.75 12.5L10.25 8L5.75 3.5'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src='https://i.ibb.co/DYxtCJq/img-1.png'
                  className='w-full rounded-md'
                  alt='chair'
                />
              </article>
              {/* Image Article 02 */}
              <article className='sm:w-1/2 sm:mt-0 mt-4 relative'>
                <div>
                  <p className='p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>
                    12 April 2021
                  </p>
                  <div className='absolute bottom-0 left-0 p-6'>
                    <h2 className='text-xl font-semibold 5 text-white'>
                      The Decorated Ways 02
                    </h2>
                    <p className='text-base leading-4 text-white mt-2'>
                      Dive into minimalism
                    </p>
                    <a
                      href='javascript:void(0)'
                      className='focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'
                    >
                      <p className='pr-2 text-sm font-medium leading-none'>
                        Read More
                      </p>
                      <svg
                        className='fill-stroke'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.75 12.5L10.25 8L5.75 3.5'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src='https://i.ibb.co/3C5HvxC/img-2.png'
                  className='w-full rounded-md'
                  alt='wall design'
                />
              </article>
            </div>
            {/* Above Image 03 */}
            <div className='relative'>
              <div>
                <p className='md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>
                  12 April 2021
                </p>
                <div className='absolute bottom-0 left-0 md:p-10 p-6'>
                  <h2 className='text-xl font-semibold 5 text-white'>
                    The Decorated Ways 03
                  </h2>
                  <p className='text-base leading-4 text-white mt-2'>
                    Dive into minimalism
                  </p>
                  <a
                    href='javascript:void(0)'
                    className='focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'
                  >
                    <p className='pr-2 text-sm font-medium leading-none'>
                      Read More
                    </p>
                    <svg
                      className='fill-stroke'
                      width={16}
                      height={16}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5.75 12.5L10.25 8L5.75 3.5'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src='https://i.ibb.co/Ms4qyXp/img-3.png'
                alt='sitting place'
                className='w-full mt-8 md:mt-6 hidden sm:block rounded-md'
              />
              <img
                className='w-full mt-4 sm:hidden rounded-md'
                src='https://i.ibb.co/6XYbN7f/Rectangle-29.png'
                alt='sitting place'
              />
            </div>
          </article>

          {/* Right Side */}
          <article className='lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between'>
            {/* First 04 Image */}
            <article className='relative'>
              <div>
                <p className='md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>
                  12 April 2021
                </p>
                <div className='absolute bottom-0 left-0 md:p-10 p-6'>
                  <h2 className='text-xl font-semibold 5 text-white'>
                    The Decorated Ways
                  </h2>
                  <p className='text-base leading-4 text-white mt-2'>
                    Dive into minimalism
                  </p>
                  <a
                    href='javascript:void(0)'
                    className='focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'
                  >
                    <p className='pr-2 text-sm font-medium leading-none'>
                      Read More
                    </p>
                    <svg
                      className='fill-stroke'
                      width={16}
                      height={16}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5.75 12.5L10.25 8L5.75 3.5'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src='https://i.ibb.co/6Wfjf2w/img-4.png'
                alt='sitting place'
                className='w-full sm:block hidden rounded-md'
              />
              <img
                className='w-full sm:hidden rounded-md'
                src='https://i.ibb.co/dpXStJk/Rectangle-29.png'
                alt='sitting place'
              />
            </article>
            {/* First 05 & 06 Image */}
            <article className='sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4'>
              {/* Image 05 */}
              <div className='relative w-full'>
                <div>
                  <p className='p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>
                    12 April 2021
                  </p>
                  <div className='absolute bottom-0 left-0 p-6'>
                    <h2 className='text-xl font-semibold 5 text-white'>
                      The Decorated Ways 05
                    </h2>
                    <p className='text-base leading-4 text-white mt-2'>
                      Dive into minimalism
                    </p>
                    <a
                      href='javascript:void(0)'
                      className='focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'
                    >
                      <p className='pr-2 text-sm font-medium leading-none'>
                        Read More
                      </p>
                      <svg
                        className='fill-stroke'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.75 12.5L10.25 8L5.75 3.5'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src='https://i.ibb.co/3yvZBpm/img-5.png'
                  className='w-full rounded-md'
                  alt='chair'
                />
              </div>
              {/* Image 06 */}
              <div className='relative w-full sm:mt-0 mt-4'>
                <div>
                  <p className='p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>
                    12 April 2021
                  </p>
                  <div className='absolute bottom-0 left-0 p-6'>
                    <h2 className='text-xl font-semibold 5 text-white'>
                      The Decorated Ways 06
                    </h2>
                    <p className='text-base leading-4 text-white mt-2'>
                      Dive into minimalism
                    </p>
                    <a
                      href='javascript:void(0)'
                      className='focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'
                    >
                      <p className='pr-2 text-sm font-medium leading-none'>
                        Read More
                      </p>
                      <svg
                        className='fill-stroke'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.75 12.5L10.25 8L5.75 3.5'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src='https://i.ibb.co/gDdnJb5/img-6.png'
                  className='w-full rounded-md'
                  alt='wall design'
                />
              </div>
            </article>
          </article>
        </article>
      </div>
    </section>
  )
}

export default WeeklyPosts
