"use client"

import { useContext, useState } from 'react'
import InfoCard from './components/InfoCard'
import Search from './components/Search'
import Error from './components/Error'
import { UserDataContext } from './context/UserData'
import Button from './components/Button'
import { RepoContext } from './context/RepoData'
import RepoCard from './components/RepoCard'

export default function Home() {

  const [showRepos, setShowRepos] = useState(false)

  const {error, dataValue} = useContext(UserDataContext);
  const {repoValues, setLoadRepos} = useContext(RepoContext);

  const handleClick = () => {
    setLoadRepos(true)
    setShowRepos(true)
  }

  return (
    <main className='primary-color w-100 gap-10 font-mono flex flex-col pt-20 max-md:pb-20 md:mb-10'>
      <h1 className='text-5xl max-md:text-4xl font-bold m-auto'>Github Finder</h1>
      
      <Search/>

      {error && <Error/>}
      {dataValue && <div className='m-auto w-2/3 max-md:w-[80vw] animate-animateFromTop flex flex-col gap-10 items-center'>
        <InfoCard {...dataValue} />
        <div className='w-3/5'>
          <Button label={`See repositories of ${dataValue.name}`} onClick={handleClick}/>
        </div>
      </div>}

      <div className='m-auto w-2/3 max-md:w-[80vw] animate-animateFromTop '>
        {showRepos && repoValues.map(item => (<RepoCard {...item}/>))}
      </div>

      
    </main>
  )
}
