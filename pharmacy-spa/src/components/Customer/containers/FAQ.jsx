import React, { useState } from 'react'
import { Question, Title } from '../presentational'
import { questions } from '../../../data/data'
const FAQ = () => {
  const [selected, setSelected] = useState(null)
  const tapQuestion = (id) => setSelected(id)
  return (
    <section className='bg-white py-12'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <Title children={'Got Questions?'} className={'text-center'} />
        <div className='grid  mx-auto mt-8 text-[#141a55]'>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                tapQuestion={tapQuestion}
                selected={selected}
                {...question}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
