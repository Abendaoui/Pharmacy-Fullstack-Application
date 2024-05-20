import React from 'react'

const Question = ({ tapQuestion, selected, id, answer,head }) => {
  return (
    <article
      onClick={() => tapQuestion(id)}
      key={id}
      className={`p-5 rounded-2xl mb-4 ${
        selected !== id ? 'bg-[#f1f5f9]' : 'bg-[#9fe870]'
      }`}
    >
      <details className='group'>
        <summary className='flex justify-between items-center cursor-pointer list-none font-bold text-lg'>
          <span>{head}</span>
          <span className='transition group-open:rotate-180'>
            <svg
              fill='none'
              height={24}
              shapeRendering='geometricPrecision'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              width={24}
            >
              <path d='M6 9l6 6 6-6' />
            </svg>
          </span>
        </summary>
        <p className='mt-3 group-open:animate-fadeIn'>{answer}</p>
      </details>
    </article>
  )
}

export default Question
