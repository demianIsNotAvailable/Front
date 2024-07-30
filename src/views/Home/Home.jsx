import React, { useContext } from 'react'
import { SampleContext } from '../../contexts/SampleContext/SampleContext'

export const Home = () => {

  const secretNumber = useContext(SampleContext)

  return (
    <>
      <div>Home <h1>{secretNumber}</h1></div>
    </>
  )
}
