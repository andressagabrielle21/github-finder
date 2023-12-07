"use client"

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
}

import { useState } from "react";
import Button from "./Button"
import Image from "next/image"

const Search = ({loadUser}: SearchProps) => {
  const [search, setSearch] = useState("");

  return (
    <div className='border-[1.5px] rounded-full flex justify-between items-center px-3 py-2 m-auto'>
      <Image src="/search.png" alt="" width={30} height={30}/>
      <input value={search} onChange={(e) => setSearch(e.target.value)} className='text-slate-gray outline-none primary-color border-none py-2 p-4 rounded-full' placeholder='Search Github username...' type="text" />

      <Button label="Search" disabled={false} onClick={() => loadUser(search)}/>
    </div>
  )
}

export default Search