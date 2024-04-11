"use client"

import { ReactNode, createContext, useEffect, useState } from "react";
import { UserProps } from "../types/user";

interface UsernameContext {
  searchUser: string,
  setSearchUser: React.Dispatch<React.SetStateAction<string>>,
  dataValue: UserProps | null,
  error: boolean
}

export const UserDataContext = createContext<UsernameContext>({
  searchUser: '',
  setSearchUser: () => {},
  dataValue: null,
  error: false,
});

export const UserDataProvider = ({children}: {children: ReactNode}) => {
  const [dataValue, setDataValue] = useState<UserProps | null>(null)
  const [error, setError] = useState(false);
  const [searchUser, setSearchUser] = useState('');

  const callApi = async () => {
    setDataValue(null)
    setError(false);
    

    if (searchUser) {
      try {
        const response = await fetch (`https://api.github.com/users/${searchUser}`) 
        const data = await response.json();
        
        const {name, avatar_url, login, location, blog, bio, company, public_repos, followers, updated_at} = data;
  
        const userData = {
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
        setDataValue(userData)
        
      } catch (error){
        setError(true);
      } 
    }
  }

  useEffect(() => {
    callApi()
  }, [searchUser])
  
  return (
    <UserDataContext.Provider value={{
      searchUser,
      setSearchUser,
      dataValue,
      error
    }}>
      {children}
    </UserDataContext.Provider>
  )
}