import { UserProps } from '../types/user'

const loadUser = async(username : string) => {

  const response = await fetch(
    `https://api.github.com/users/${username}`
  )

  const data = await response.json()

  // if (response.status === 404) {
  //   setError(true);
  //   return;
  // }
  
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
  return userData
}

export default loadUser