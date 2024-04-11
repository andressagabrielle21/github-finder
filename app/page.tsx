"use client"

import { useContext, useState } from 'react'
import InfoCard from './components/InfoCard'
import Search from './components/Search'
import Error from './components/Error'
import { UserDataContext } from './context/UserData'

export default function Home() {

  const {error, dataValue} = useContext(UserDataContext);


  return (
    <main className='primary-color w-100 gap-10 font-mono flex flex-col pt-20 max-md:pb-20 md:mb-10'>
      <h1 className='text-5xl max-md:text-4xl font-bold m-auto'>Github Finder</h1>
      
      <Search/>

      {error && <Error/>}
      {dataValue && <div className='m-auto w-2/3 max-md:w-[80vw] animate-animateFromTop'>
        <InfoCard {...dataValue} />
      </div>}

      
    </main>
  )
}
