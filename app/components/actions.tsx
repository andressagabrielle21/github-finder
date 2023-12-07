import {useState} from 'react'
import { UserProps } from '../types/user';

// const [user, setUser] = useState<UserProps | null>(null);

const actions = async(username: string) => {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  )

  const data = await response.json()
  console.log(data)

  return data;
}

export default actions;


