"use client"

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { itemProps } from "../types/user";
import { UserDataContext } from "./UserData";

interface IRepo {
  setLoadRepos: React.Dispatch<React.SetStateAction<boolean>>,
  repoValues: itemProps[],
}

export const RepoContext = createContext<IRepo>({
  setLoadRepos: () => {},
  repoValues: [],
});

export const RepoProvider = ({children}: {children: ReactNode}) => {
  const {searchUser} = useContext(UserDataContext)
  const [repoValues, setRepoValues] = useState<itemProps[]>([])
  const [loadRepos, setLoadRepos] = useState(false)

  const callApi = async () => {
    if (loadRepos) {
      const response = await fetch (`https://api.github.com/users/${searchUser}/repos?sort=created&direction=desc`) 
      const data = await response.json();


      if (response.status === 404) {
        return;
      }

      const formattedData = data.map((item : itemProps) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        clone_url: item.clone_url,
        homepage: item.homepage,
      }));
      setRepoValues(formattedData)
    }
  }

  useEffect(() => {
    callApi()
  }, [loadRepos])

  return (
    <RepoContext.Provider value={{
      setLoadRepos,
      repoValues,
    }}>
      {children}
    </RepoContext.Provider>
  )
}