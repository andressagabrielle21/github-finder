import { UserProps } from '../types/user'
import Error from './Error';
import { getRepositories } from './RepoCard';

const loadUserCall = async(username : string, errorPage: boolean) => {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  )

  const data = await response.json()
  
  if (response.status === 404) {
    errorPage = true
    return errorPage;
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
  // setUser(userData)

  // const dataRepos = getRepositories(login)

  return userData
}

export default loadUserCall