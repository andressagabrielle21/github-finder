"use client"

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
}

import { useState, KeyboardEvent } from "react";
import Button from "./Button"
import Image from "next/image"

const Search = ({loadUser}: SearchProps) => {
  const [search, setSearch] = useState("");

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(search)
      // getRepositories(search);
    }
  }

  return (
    <div className='rounded-full secundary-color flex justify-between items-center px-3 py-2 m-auto '>
      <Image src="/search.png" alt="" width={25} height={25}/>
      <input value={search} onChange={(e) => setSearch(e.target.value)} className='text-slate-gray outline-none secundary-color border-none py-2 p-4 rounded-full max-md:pr-0' placeholder='Search username...' type="text" onKeyDown={handleEnter}/>

      <Button label="Search" disabled={false} onClick={() => loadUser(search)}/>
    </div>
  )
}

export default Search