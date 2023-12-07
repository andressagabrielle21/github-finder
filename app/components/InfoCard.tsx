import Link from "next/link"
import Image from "next/image"

export type InfoCardProp = {
  avatar_url: string,
  name: string,
  login: string,
  location: string,
  blog: string,
  company: string,
  public_repos: number,
  bio: string
}

const InfoCard = ({avatar_url, name, login, bio, location, blog, company, public_repos}: InfoCardProp) => {
  return (
    <div className="flex justify-evenly items-start gap-10 secundary-color border-[1.5px] rounded-[20px] p-10">
      <Image className="rounded-full" src={avatar_url} alt="profile pic" width={200} height={200}/>

      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-3xl font-bold mb-3">{name}</h1>
          <p>@{login}</p>
        </div>

        <div>
          <p>{bio}</p>
        </div>

        <div className="flex justify-around gap-10 primary-color p-3 rounded-lg">

          <div>
            <p>Repos</p>
            <p>{public_repos}</p>
          </div>
          <div>
          <p>Commits this month</p>
            <p>value</p>
          </div>
          <div>
            <p>Followers</p>
            <p>value</p>
          </div>
          
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex gap-3 items-center">
            <Image src="/local.png" alt="Github" width={30} height={30}/>
            {location}
          </div>
          <div className="flex gap-3 items-center">
            <Image src="/link.png" alt="Github" width={30} height={30}/>
            <Link href={blog}>{blog}</Link> 
          </div>
          <div className="flex gap-3 items-center">
            <Image src="/linkedin.png" alt="Github" width={30} height={30}/>
            Linkedin
          </div>
          <div className="flex gap-3 items-center ">
            <Image src="/company.png" alt="Github" width={30} height={30}/>
            {company}
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default InfoCard