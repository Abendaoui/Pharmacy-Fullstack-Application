import { Fragment, useEffect, useState } from 'react'
import {
  Dialog,
  Disclosure,
  Transition,
  TransitionChild,
  DialogPanel,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid'
import ViewListIcon from '@mui/icons-material/ViewList'
import {
  FormFilter,
  ListProducts,
  SortMenu,
} from '../../../components/Customer/containers'
import { filters } from '../../../data/data'
import axiosClient from '../../../configs/axiosClient'
import { Title } from '../../../components/Customer/presentational'

const Products = () => {
  document.title = 'Products'
  const [grid, setGrid] = useState(true)
  const [data, setData] = useState([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const getMedecines = async () => {
    try {
      await axiosClient.get('/all_medecines').then(({ data }) => {
        if (data) {
          setData(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const [activeCategory, setActiveCategory] = useState('')
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }
  const filteredProducts = data.filter((medecine) => {
    return activeCategory !== ''
      ? medecine.category === activeCategory ||
          medecine.brand === activeCategory
      : medecine
  })
  useEffect(() => {
    getMedecines()
  }, [])

  return (
    <section className='bg-white w-full'>
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 lg:hidden'
            onClose={setMobileFiltersOpen}
          >
            <TransitionChild
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </TransitionChild>

            <div className='fixed inset-0 z-40 flex'>
              <TransitionChild
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <DialogPanel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
                  <div className='flex items-center justify-between px-4'>
                    <h2 className='text-lg font-medium text-gray-900'>
                      Filters
                    </h2>
                    <button
                      type='button'
                      className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className='mt-4 border-t border-gray-200'>
                    {filters.map((section) => (
                      <Disclosure
                        as='div'
                        key={section.id}
                        className='border-t border-gray-200 px-4 py-6'
                      >
                        {({ open }) => (
                          <>
                            <h3 className='-mx-2 -my-3 flow-root'>
                              <DisclosureButton className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
                                <span className='font-medium text-gray-900'>
                                  {section.name}
                                </span>
                                <span className='ml-6 flex items-center'>
                                  {open ? (
                                    <MinusIcon
                                      className='h-5 w-5'
                                      aria-hidden='true'
                                    />
                                  ) : (
                                    <PlusIcon
                                      className='h-5 w-5'
                                      aria-hidden='true'
                                    />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className='pt-6'>
                              <div className='space-y-6'>
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className='flex items-center'
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`brand category`}
                                      defaultValue={option.value}
                                      type='radio'
                                      defaultChecked={option.checked}
                                      className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 checked:bg-green-400'
                                      style={{ backgroundColor: 'green' }}
                                      onChange={() =>
                                        handleCategoryChange(option.value)
                                      }
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className='ml-3 min-w-0 flex-1 text-gray-500'
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24'>
            <Title children={'Our Products'} />
            <div className='flex items-center'>
              {/* Sort */}
              <SortMenu />
              {/* Grid Button */}
              <button
                type='button'
                className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'
                onClick={() => setGrid(!grid)}
              >
                {grid ? (
                  <Squares2X2Icon className='h-5 w-5' aria-hidden='true' />
                ) : (
                  <ViewListIcon className='size-5' />
                )}
              </button>
              {/* Filter Button */}
              <button
                type='button'
                className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className='sr-only'>Filters</span>
                <FunnelIcon className='h-5 w-5' aria-hidden='true' />
              </button>
            </div>
          </div>

          {/* Filter & Products Display */}
          <section aria-labelledby='products-heading' className='pb-24 pt-6'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}
              <FormFilter handleCategoryChange={handleCategoryChange} />
              {/* Product grid */}
              <div className='lg:col-span-3'>
                <ListProducts data={filteredProducts} grid={grid} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  )
}

export default Products
