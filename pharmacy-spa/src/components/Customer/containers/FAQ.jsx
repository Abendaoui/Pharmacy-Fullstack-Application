import React, { useState } from 'react'
import { Question, Title } from '../presentational'

const FAQ = () => {
  const [selected, setSelected] = useState(null)
const questions = [
  {
    id: 1,
    head: 'How can I place an order on the pharmacy app?',
    answer:
      'To place an order, simply browse through the products, add the desired items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.',
  },
  {
    id: 2,
    head: 'Can I track my order after placing it?',
    answer:
      'Yes, you can track your order through the "My Orders" section in your account. You will also receive updates via email or SMS regarding the status of your order.',
  },
  {
    id: 3,
    head: 'Are there any delivery charges for orders?',
    answer:
      'Delivery charges may vary depending on your location and the total value of your order. You can see the applicable delivery charges at the checkout page before confirming your order.',
  },
  {
    id: 4,
    head: 'What payment methods are accepted?',
    answer:
      'We accept various payment methods including credit/debit cards, Paypal. You can choose your preferred payment method at checkout.',
  },
  {
    id: 5,
    head: 'What should I do if I receive the wrong medication?',
    answer:
      'If you receive the wrong medication, please contact our customer support immediately. We will arrange for a return and replacement as per our return policy.',
  },
]


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
