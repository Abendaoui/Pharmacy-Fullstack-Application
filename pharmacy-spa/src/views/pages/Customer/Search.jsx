import React, { useState, useEffect } from 'react'
import { ListSearchedMedecine } from '../../../components/Customer/containers'
import { useParams } from 'react-router'
import { Title } from '../../../components/Customer/presentational'
import axiosClient from '../../../configs/axiosClient'
const Search = () => {
  const { title } = useParams()
  document.title = title
  const [data, setData] = useState([])

  const getMedecines = async () => {
    try {
      await axiosClient
        .get(`/all_medecines?name[like]=${title}`)
        .then(({ data }) => {
          if (data) {
            setData(data.data)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMedecines()
  }, [title])
  return (
    <section>
      <article>
        <Title children={`You Search For ${title}`} className='text-center' />
      </article>
      {data.length > 0 ? (
        <ListSearchedMedecine data={data} />
      ) : (
        <div className='text-center mb-52'>
          <h1 className='text-xl'>No Items Found</h1>
        </div>
      )}
    </section>
  )
}

export default Search
