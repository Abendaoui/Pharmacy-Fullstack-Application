import React, { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axiosClient from '../../../configs/axiosClient'
import { NotificationContext } from '../../../contexts/NotificationContext'

const Return = () => {
  document.title = 'Return'
  const { showNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  const { id } = useParams()
  const [returnReason, setReturnReason] = useState({
    reason: '',
    order_status: 'returned',
  })
  const returnOrder = async (ev) => {
    ev.preventDefault()
    const formData = new FormData()
    formData.append('order_status', 'returned')
    formData.append('reason', returnReason)
    await axiosClient
      .put(`/orders/${id}`, formData)
      .then(({ data }) => {
        if (data) {
          showNotification('success', 'Order Returned Successfully')
          setTimeout(navigate('/profile'), 2500)
        }
      })
      .catch((err) => {
        showNotification('error', 'Something went wrong!')
      })
  }
  return (
    <section className='mx-auto max-w-5xl mt-32'>
      <form
        onSubmit={returnOrder}
        className='space-y-4 bg-transparent px-6 py-4 rounded-lg shadow-xl'
      >
        <div className='mt-4'>
          <label className='sr-only' htmlFor='reason'>
            Reason
          </label>

          <textarea
            className='w-full rounded-lg p-3 text-sm border-green-500 border focus:outline-none'
            placeholder='Add Few Sentence To Describe What The Problem'
            rows='8'
            id='reason'
            value={returnReason.reason}
            onChange={(e) =>
              setReturnReason({
                ...returnReason,
                reason: e.target.value,
              })
            }
          ></textarea>
        </div>

        <div className='mt-4 w-full'>
          <button
            type='submit'
            className='capitalize hover:text-gray-700 transition-colors texl-lg
                        flex gap-3 py-3 px-5 rounded-lg mt-5 text-sm font-semibold bg-green-500 text-white mx-auto'
          >
            Return
          </button>
        </div>
      </form>
    </section>
  )
}

export default Return
