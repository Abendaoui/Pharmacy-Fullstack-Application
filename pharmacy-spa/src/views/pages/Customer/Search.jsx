import React, { useState, useEffect } from 'react'
import { ListSearchedMedecine } from '../../../components/Customer/containers'
import { useParams } from 'react-router'
import { Title } from '../../../components/Customer/presentational'
import axiosClient from '../../../configs/axiosClient'
const Search = () => {
  const { title } = useParams()
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
      <ListSearchedMedecine data={data} />
    </section>
  )
}

export default Search
