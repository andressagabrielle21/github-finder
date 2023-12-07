"use client"

import { useState } from 'react'
import InfoCard from './components/InfoCard'
import Search from './components/Search'
import { UserProps } from './types/user'

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async(username: string) => {
    const response = await fetch(
      `https://api.github.com/users/${username}`
    )

    const data = await response.json()
    
    const {name, avatar_url, login, location, blog, bio, company, public_repos} = data;

    const userData: UserProps = {
      name,
      avatar_url,
      login, 
      location,
      blog, 
      company,
      public_repos,
      bio
    }

    setUser(userData)
  }


  return (
    <main className='primary-color w-100 gap-10 font-mono flex flex-col p-20'>
      <h1 className='text-5xl font-bold m-auto'>Github Finder</h1>
      
      <Search loadUser={loadUser}/>

      {user && <div className='m-auto w-2/3'>
        <InfoCard bio={user.bio} public_repos={user.public_repos} login={user.login} blog={user.blog} avatar_url={user.avatar_url} name={user.name} location={user.location} company={user.company}/>
      </div>}

      
    </main>
  )
}
