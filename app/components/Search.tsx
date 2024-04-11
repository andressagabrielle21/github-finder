"use client"
import { useState, KeyboardEvent, useContext } from "react";
import Button from "./Button"
import Image from "next/image"
import { UserDataContext } from "../context/UserData";

const Search = () => {
  const {setSearchUser} = useContext(UserDataContext)

  const [search, setSearch] = useState("");


  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setSearchUser(search)
    }
  }

  const onSubmit = () => {
    setSearchUser(search);
  }

  return (
    <div className='rounded-full secundary-color flex justify-between items-center px-3 py-2 m-auto '>
      <Image src="/search.png" alt="" width={25} height={25}/>
      <input value={search} onChange={(e) => setSearch(e.target.value)} className='text-slate-gray outline-none secundary-color border-none py-2 p-4 rounded-full max-md:pr-0' placeholder='Search username...' type="text" onKeyDown={handleEnter}/>

      <Button label="Search" disabled={false} onClick={onSubmit}/>
    </div>
  )
}

export default Search