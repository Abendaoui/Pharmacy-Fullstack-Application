import React from 'react'

const SearchForm = () => {
  return (
    <article className='lg:block hidden'>
      <form>
        <div className='relative'>
          <input
            type='search'
            id='default-search'
            className='block py-2 px-3.5  w-[270px] text-sm text-black bg-gray-200 rounded-lg focus:outline-none 
                placeholder:text-black'
            placeholder='Search Posts Tags...'
            required=''
          />
          <button
            type='submit'
            className='text-white absolute right-1.5 bottom-[6px] bg-[#9fe870] focus:outline-none
                 font-medium rounded-full text-sm p-1  flex items-center justify-center'
          >
            <svg
              className='w-4 h-4 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </form>
    </article>
  )
}

export default SearchForm
