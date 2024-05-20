import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='relative overflow-hidden bg-white h-screen'>
      <div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
        <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
          <div className='sm:max-w-lg'>
            <h1 className='text-lg font-bold tracking-tight text-green-500 sm:text-6xl capitalize'>
              Nature's Remedies
            </h1>
            <p className='mt-4 text-base text-gray-500 capitalize'>
              Discover the power of natural medicine with our curated selection
              of herbal remedies and supplements. From traditional herbal
              extracts to modern wellness solutions, explore nature's bounty for
              holistic health and well-being.
            </p>
          </div>
          <div>
            <div className='mt-10'>
              {/* Decorative image grid */}
              <div
                aria-hidden='true'
                className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
              >
                <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                  <div className='flex items-center space-x-6 lg:space-x-8'>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
                        <img
                          src='https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_1280.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://cdn.pixabay.com/photo/2023/10/24/09/23/black-peppercorn-8337820_1280.jpg'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://images.pexels.com/photos/3683088/pexels-photo-3683088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://images.pexels.com/photos/3273989/pexels-photo-3273989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          src='https://images.pexels.com/photos/2565761/pexels-photo-2565761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          alt=''
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to='/products'
                className='rounded-md bg-green-600 px-5 py-4 text-sm font-semibold text-white shadow-sm  duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
              >
                Discover Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
