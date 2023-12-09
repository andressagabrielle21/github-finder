import { UserProps } from '../types/user'

const loadUser = async (user: string ) => {
  const response = await fetch(
    `https://api.github.com/users/${user}`
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

  return userData;
}

export default loadUser