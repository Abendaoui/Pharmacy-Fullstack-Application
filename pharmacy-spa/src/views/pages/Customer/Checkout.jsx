import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SingleCheckoutProduct from '../../../components/Customer/containers/SingleCheckoutProduct'
import axiosClient from '../../../configs/axiosClient'
import { NotificationContext } from '../../../contexts/NotificationContext'
import { useCart } from '../../../hooks/useCart'
const Checkout = () => {
  document.title = 'Checkout'
  const { setCartCount } = useCart()
  const navigate = useNavigate()
  const { showNotification } = useContext(NotificationContext)

  // Billing
  const [selectedOption, setSelectedOption] = useState('card')
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const [total, setTotal] = useState(0)
  const [cards, setCards] = useState([])

  const getCardItems = async () => {
    try {
      await axiosClient.get('/carts').then(({ data }) => {
        if (data) {
          const { totalPrice, carts } = data
          setTotal(totalPrice)
          setCards(carts)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  // Addresses
  const [data, setData] = useState([])
  const [selectedAddress, setSelectedAddress] = useState('')
  const getMyAddresses = async () => {
    try {
      await axiosClient.get(`/addresses`).then(({ data }) => {
        if (data) {
          setData(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const addOrder = async () => {
    const formData = new FormData()
    formData.append('address_id', selectedAddress)
    formData.append('payment_method', selectedOption)
    formData.append('total_price', total - discount + 50)

    try {
      const response = await axiosClient.post('/orders', formData)
      if (response.status === 201) {
        showNotification('success', 'Order Placed SuccessFully')
        setCartCount(0)
        setTimeout(() => {
          navigate('/profile')
        }, 2500)
      }
    } catch (error) {
      showNotification('error', 'Something went wrong!')
    }
  }
  // Coupon
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const handleApplyCoupon = async () => {
    try {
      const response = await axiosClient.post('/coupons/validate', {
        code: couponCode,
      })
      const coupon = response.data
      setDiscount(Number(coupon.discount))
      showNotification('success', 'Coupon Applied SucceeFully')
    } catch (error) {
      showNotification('error', 'Invalid or expired coupon')
    }
  }
  useEffect(() => {
    getCardItems()
    getMyAddresses()
  }, [])

  return (
    <section>
      <div className='mx-auto max-w-7xl py-5'>
        {/* Back Link */}
        <div className='px-5'>
          <div className='mb-2'>
            <Link
              to='/card'
              className='focus:outline-none hover:underline text-white text-sm bg-green-400 hover:bg-green-500 rounded-md px-5 py-2 duration-500'
            >
              Back
            </Link>
          </div>
        </div>
        <div className='w-full bg-white border-gray-200 px-5 py-10 text-gray-800'>
          <div className='w-full'>
            <div className='-mx-3 md:flex items-start'>
              {/* Left Side */}
              <div className='px-3 md:w-7/12 lg:pr-10'>
                {/* Products */}
                <div className='w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6'>
                  {cards.map((cart) => {
                    return (
                      <SingleCheckoutProduct
                        key={cart.id}
                        {...cart.medecine}
                        quantity={cart.quantity}
                      />
                    )
                  })}
                </div>
                {/* End Products */}
                {/* Discount */}
                <div className='mb-6 pb-6 border-b border-gray-200'>
                  <div className='-mx-2 flex items-end justify-end'>
                    <div className='flex-grow px-2 lg:max-w-xs'>
                      <label className='text-gray-600 font-semibold text-sm mb-2 ml-1'>
                        Discount code
                      </label>
                      <div>
                        <input
                          className='w-full px-3 py-2 border border-gray-200 rounded-md duration-500 focus:outline-none focus:border-green-500 transition-colors'
                          placeholder='XXXXXX'
                          type='text'
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='px-2'>
                      <button
                        className='block w-full max-w-xs mx-auto border border-transparent bg-green-400 hover:bg-green-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold'
                        onClick={handleApplyCoupon}
                      >
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Discount */}
                {/* Amount */}
                <div className='mb-6 pb-6 border-b border-gray-200 text-gray-800'>
                  <div className='w-full flex mb-3 items-center'>
                    <div className='flex-grow'>
                      <span className='text-gray-600'>Subtotal</span>
                    </div>
                    <div className='pl-3'>
                      <span className='font-semibold'>
                        {total - discount}MAD
                      </span>
                    </div>
                  </div>
                  <div className='w-full flex items-center'>
                    <div className='flex-grow'>
                      <span className='text-gray-600'>Shipping</span>
                    </div>
                    <div className='pl-3'>
                      <span className='font-semibold'>50MAD</span>
                    </div>
                  </div>
                </div>
                <div className='mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl'>
                  <div className='w-full flex items-center'>
                    <div className='flex-grow'>
                      <span className='text-gray-600'>Total</span>
                    </div>
                    <div className='pl-3'>
                      <span className='font-semibold'>
                        {total - discount + 50} MAD
                      </span>
                    </div>
                  </div>
                </div>
                {/* End Amount */}
              </div>
              {/* Right Side */}
              <div className='px-3 md:w-5/12'>
                {/* Address */}
                <div className='w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6'>
                  <div className='w-full flex items-center'>
                    <div className='w-32'>
                      <span className='text-gray-600 font-semibold'>
                        Billing Address
                      </span>
                    </div>
                    <div className='flex-grow pl-3'>
                      {data.length > 0 ? (
                        <select
                          className='form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors cursor-pointer'
                          name='address'
                          onChange={(e) => setSelectedAddress(e.target.value)}
                        >
                          <option value=''>Choose</option>
                          {data.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.city} {item.street_address} {item.zip_code}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <div>
                          <h1>
                            <Link className=' underline' to={'/address'}>
                              Add Address
                            </Link>
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Paying Details */}
                <div className='w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6'>
                  {/* Card */}
                  <div className='w-full p-3 border-b border-gray-200'>
                    <div className='mb-5'>
                      <label
                        htmlFor='type1'
                        className='flex items-center cursor-pointer'
                      >
                        <input
                          type='radio'
                          className='form-radio h-5 w-5 text-green-500'
                          name='type'
                          id='type1'
                          checked={selectedOption === 'card'}
                          onChange={handleOptionChange}
                          value='card'
                        />
                        <img
                          src='https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png'
                          className='h-6 ml-3'
                        />
                      </label>
                    </div>
                    <div>
                      <div className='mb-3'>
                        <label className='text-gray-600 font-semibold text-sm mb-2 ml-1'>
                          Name on card
                        </label>
                        <div>
                          <input
                            className='w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors'
                            placeholder='John Smith'
                            type='text'
                            readOnly={selectedOption !== 'card'}
                          />
                        </div>
                      </div>
                      <div className='mb-3'>
                        <label className='text-gray-600 font-semibold text-sm mb-2 ml-1'>
                          Card number
                        </label>
                        <div>
                          <input
                            className='w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors'
                            placeholder='0000 0000 0000 0000'
                            type='text'
                            readOnly={selectedOption !== 'card'}
                          />
                        </div>
                      </div>
                      <div className='mb-3 -mx-2 flex items-end'>
                        <div className='px-2 w-1/3'>
                          <label className='text-gray-600 font-semibold text-sm mb-2 ml-1'>
                            Expiration date
                          </label>
                          <div>
                            <select
                              className='form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors cursor-pointer'
                              readOnly={selectedOption !== 'card'}
                            >
                              <option value={'01'}>01 - January</option>
                              <option value={'02'}>02 - February</option>
                              <option value={'03'}>03 - March</option>
                              <option value={'04'}>04 - April</option>
                              <option value={'05'}>05 - May</option>
                              <option value={'06'}>06 - June</option>
                              <option value={'07'}>07 - July</option>
                              <option value={'08'}>08 - August</option>
                              <option value={'09'}>09 - September</option>
                              <option value={'10'}>10 - October</option>
                              <option value={'11'}>11 - November</option>
                              <option value={'12'}>12 - December</option>
                            </select>
                          </div>
                        </div>
                        <div className='px-2 w-1/3'>
                          <select
                            className='form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors cursor-pointer'
                            readOnly={selectedOption !== 'card'}
                          >
                            <option value={'2020'}>2020</option>
                            <option value={'2021'}>2021</option>
                            <option value={'2022'}>2022</option>
                            <option value={'2023'}>2023</option>
                            <option value={'2024'}>2024</option>
                            <option value={'2025'}>2025</option>
                            <option value={'2026'}>2026</option>
                            <option value={'2027'}>2027</option>
                            <option value={'2028'}>2028</option>
                            <option value={'2029'}>2029</option>
                          </select>
                        </div>
                        <div className='px-2 w-1/4'>
                          <label className='text-gray-600 font-semibold text-sm mb-2 ml-1'>
                            Security code
                          </label>
                          <div>
                            <input
                              className='w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors'
                              placeholder={''}
                              type='text'
                              readOnly={selectedOption !== 'card'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Paypal */}
                  <div className='w-full p-3'>
                    <label
                      htmlFor='type2'
                      className='flex items-center cursor-pointer'
                    >
                      <input
                        type='radio'
                        className='form-radio h-5 w-5 text-green-500'
                        name='type'
                        id='type2'
                        value='paypal'
                        checked={selectedOption === 'paypal'}
                        onChange={handleOptionChange}
                      />
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg'
                        width={80}
                        className='ml-3'
                      />
                    </label>
                  </div>
                  {/* Cash */}
                  <div className='w-full p-3'>
                    <label
                      htmlFor='type2'
                      className='flex items-center cursor-pointer'
                    >
                      <input
                        type='radio'
                        className='form-radio h-5 w-5 text-green-500'
                        name='cash'
                        id='cash'
                        value='cash'
                        checked={selectedOption === 'cash'}
                        onChange={handleOptionChange}
                      />
                      <img
                        src='https://cdn-icons-png.freepik.com/512/8992/8992633.png'
                        width={80}
                        className='ml-3'
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    onClick={addOrder}
                    className='block w-full max-w-xs mx-auto duration-500 bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-2 font-semibold'
                  >
                    <i className='mdi mdi-lock-outline mr-1' /> PAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
