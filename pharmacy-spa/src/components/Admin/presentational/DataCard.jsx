import React from 'react'
import PercentIcon from './PercentIcon'

const DataCard = ({ count, title, percent, bg }) => {
  return (
    <article
      className={`bg-[${bg}] shadow rounded-lg p-4 sm:p-6 xl:p-8 text-[#280d30]`}
    >
      <div className='flex items-center'>
        <div className='flex-shrink-0'>
          <span className='text-2xl sm:text-3xl leading-none font-bold'>
            {count}
          </span>
          <h3 className='text-base font-normal '>{title}</h3>
        </div>
        <div
          className={`ml-5 w-0 flex items-center justify-end flex-1 text-base font-bold ${
            percent > 0 ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {percent}%
          <PercentIcon percent={percent} />
        </div>
      </div>
    </article>
  )
}

export default DataCard
