import React from 'react'
import {
  AccountHeader,
  AccountForm,
} from '../../../components/Admin/containers'

const Account = () => {
  return (
    <div className='w-full lg:w-8/12 px-4 mx-auto mt-6'>
      <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-blueGray-100 border-0'>
        <AccountHeader />
        {/* Account Form Info */}
        <div className='flex-auto px-4 lg:px-10 py-10 pt-0 bg-[#f6f7f8]'>
          <AccountForm />
        </div>
      </div>
    </div>
  )
}

export default Account
