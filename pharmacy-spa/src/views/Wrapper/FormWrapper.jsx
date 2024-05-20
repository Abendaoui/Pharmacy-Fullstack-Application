import React from 'react'
import { Title, BackButton } from '../../components/Admin/presentational'

const FormWrapper = (WrappedComponent, title, backTo) => {
  return (props) => (
    <section className='w-full lg:w-11/12 px-4 mx-auto mt-6'>
      <Title children={title} />
      <BackButton backTo={backTo} />
      <WrappedComponent {...props} />
    </section>
  )
}

export default FormWrapper
