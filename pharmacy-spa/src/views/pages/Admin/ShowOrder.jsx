import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { convertDate } from '../../../utils/convertDate'
import axiosAdmin from '../../../configs/axiosAdmin'
import axiosClient from '../../../configs/axiosClient'
import { Title } from '../../../components/Admin/presentational'
import { NotificationContext } from '../../../contexts/NotificationContext'
const ShowOrder = () => {
  const { showNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  const { id } = useParams()
  const [status, setStatus] = useState('')
  const [order, setOrder] = useState({
    id: id,
    fullname: '',
    address: '',
    order_date: '',
    total_price: '',
    order_status: '',
    payment_method: '',
  })
  const getOrder = async () => {
    try {
      axiosAdmin.get(`/orders/${id}`).then(({ data }) => {
        setOrder(data.data)
      })
    } catch (error) {
      showNotification('error', 'Something Went Wrong!!')
    }
  }
  useEffect(() => {
    getOrder()
  }, [])
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const formData = new FormData()
    formData.append('order_status', status)

    try {
      const response = await axiosClient.put(`/orders/${id}`, formData)
      if (response.status === 200) {
        showNotification('success', 'Order Status Updated Successfully')
        setTimeout(navigate('/orders'), 1500)
      }
    } catch (error) {
      showNotification('error', 'Something Went Wrong!!')
    }
  }
  const options = [
    { value: 'pending', label: 'Pending' },
    { value: 'accepted', label: 'Accepted' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'canceled', label: 'Canceled' },
    { value: 'returned', label: 'Returned' },
    { value: 'delivered', label: 'Delivered' },
  ]
  return (
    <section className='mt-10 ml-10 mx-auto max-w-6xl rounded-lg'>
      <Title children={`Modify Order N° #${id}`} />
      <article>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 max-w-7xl mx-auto sm:px-3'
        >
          <div className='mb-4 flex flex-row w-full justify-between items-center gap-4'>
            <div className='mb-4 w-1/2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2 capitalize'
                htmlFor='fullname'
              >
                Fullname
              </label>
              <input
                type='text'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2'
                value={order.fullname}
                id='fullname'
                readOnly
              />
            </div>
            <div className='mb-4 w-1/2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2 capitalize'
                htmlFor='address'
              >
                Address
              </label>
              <input
                type='text'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2'
                value={order.address}
                id='address'
                readOnly
              />
            </div>
          </div>
          <div className='mb-4 flex flex-row w-full justify-between items-center gap-4'>
            <div className='mb-4 w-1/2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2 capitalize'
                htmlFor='order_date'
              >
                Order Date
              </label>
              <input
                type='text'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2'
                value={order.order_date}
                id='order_date'
                readOnly
              />
            </div>
            <div className='mb-4 w-1/2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2 capitalize'
                htmlFor='total_price'
              >
                Order Total Price
              </label>
              <input
                type='text'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2'
                value={order.total_price}
                id='total_price'
                readOnly
              />
            </div>
          </div>
          <div className='mb-4 flex flex-row w-full justify-between items-center gap-4'>
            <div className='mb-4 w-1/2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2 capitalize'
                htmlFor='payment'
              >
                Payment Method
              </label>
              <input
                type='text'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2'
                value={order.payment_method}
                id='payment'
                readOnly
              />
            </div>

            <div className='mb-4 w-1/2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2 capitalize'
                htmlFor='total_price'
              >
                Order Status
              </label>
              <select
                id='id'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option defaultChecked value={order.order_status}>
                  {order.order_status}
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex items-center justify-center mt-2'>
            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none
       focus:shadow-outline flex gap-2 items-center'
              type='submit'
            >
              Edit
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default ShowOrder
