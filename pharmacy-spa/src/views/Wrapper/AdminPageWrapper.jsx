import React from 'react'
import { Title, FormSearch } from '../../components/Admin/presentational'

const AdminPageWrapper = (WrappedComponent, title, addAble, linkTo) => {
  return (props) => (
    <section className='mt-10 ml-10 mx-auto max-w-6xl rounded-lg'>
      <Title children={title} />
      <FormSearch addAble={addAble} linkTo={linkTo} />
      <WrappedComponent {...props} />
    </section>
  )
}

export default AdminPageWrapper
