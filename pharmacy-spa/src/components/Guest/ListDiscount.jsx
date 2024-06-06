import React from 'react'

const ListDiscount = () => {
  return (
    <section className='bg-white mt-10'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap'>
          <article className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-[#fec091] w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto text-[#260b2f]'>
                <div className='p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full '>
                  <span className='text-lg font-bold'>10% Off</span>
                </div>
                <h6 className='text-xl font-semibold'>Awarded Agency</h6>
                <p className='mt-2 mb-4 text-blueGray-500'>
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </p>
              </div>
            </div>
          </article>
          <article className='w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-[#a0e1e1] w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto text-[#260b2f]'>
                <div className='p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5'>
                  <span className='text-lg font-bold'>5% CashBack</span>
                </div>
                <h6 className='text-xl font-semibold'>Free Revisions</h6>
                <p className='mt-2 mb-4 text-blueGray-500'>
                  Keep you user engaged by providing meaningful information.
                  Remember that by this time, the user is curious.
                </p>
              </div>
            </div>
          </article>
          <article className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-[#ffeb68] w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto text-[#260b2f]'>
                <div className='p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 '>
                  <span className='text-lg font-bold'>10% Off</span>
                </div>
                <h6 className='text-xl font-semibold'>Verified Company</h6>
                <p className='mt-2 mb-4 text-blueGray-500'>
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ListDiscount
