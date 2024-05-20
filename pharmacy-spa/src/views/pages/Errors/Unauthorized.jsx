import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <>
      <main className='grid h-screen place-items-center bg-green-300 px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-green-600'>401</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl capitalize'>
            Unauthorized Action
          </h1>
          <p className='mt-6 text-xl leading-7 text-black capitalize'>
            you are not allowed to this action.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              to='/home'
              className='rounded-md text-green-600 px-3.5 py-2.5 text-sm font-semibold bg-white shadow-sm hover:bg-green-500 hover:text-white duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
            >
              Go back home
            </Link>
            <Link
              to='/contact_us'
              className='rounded-md text-green-600 px-3.5 py-2.5 text-sm font-semibold bg-white shadow-sm hover:bg-green-500 hover:text-white duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
            >
              Contact support <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
export default Unauthorized
