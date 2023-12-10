"use client"

import { useState } from 'react'
import InfoCard from './components/InfoCard'
import Search from './components/Search'
import { UserProps } from './types/user'
import Error from './components/Error'

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false);

  // This logic doesnt work with the repo calls because the repo call returns a set of objects that needs to be map()

  const loadUser = async(username: string) => {
    setUser(null)
    setError(false);

    const response = await fetch(
      `https://api.github.com/users/${username}`
    )

    const data = await response.json()

    if (response.status === 404) {
      setError(true);
      return;
    }
    
    const {name, avatar_url, login, location, blog, bio, company, public_repos, followers, updated_at} = data;

    const userData: UserProps = {
      name,
      avatar_url,
      login, 
      location,
      blog, 
      company,
      public_repos,
      bio,
      followers,
      updated_at
    }
    setUser(userData)
  }

  return (
    <main className='primary-color w-100 gap-10 font-mono flex flex-col pt-20 max-md:pb-20'>
      <h1 className='text-5xl max-md:text-4xl font-bold m-auto'>Github Finder</h1>
      
      <Search loadUser={loadUser}/>

      {error && <Error/>}
      {user && <div className='m-auto w-2/3 max-md:w-[80vw] animate-animateFromTop'>
        <InfoCard {...user} />
      </div>}

      
    </main>
  )
}
