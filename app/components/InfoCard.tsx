import Link from "next/link"
import Image from "next/image"
import { UserProps } from "../types/user"

const InfoCard = ({avatar_url, name, login, bio, location, blog, company, public_repos, followers, updated_at}: UserProps) => {
  const date = new Date(updated_at);

  // Get year, month, and day part from the date
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });

  const formattedDate = day + "/" + month + "/" + year;

  return (
    <div className="flex flex-wrap justify-evenly items-start gap-10 secundary-color rounded-[20px] max-md:pt-10 md:p-10 m-auto">
      <Image className="rounded-full" src={avatar_url} alt="profile pic" width={230} height={230}/>

      <div className="flex flex-col gap-10 max-md:text-center">
        <div className="max-md:text-center">
          <h1 className="text-4xl max-md:text-3xl font-bold mb-3">{name}</h1>
          <p className="text-[#0079FE]">@{login}</p>
        </div>

        <div>
          <p>{bio}</p>
        </div>

        <div className="flex max-md:flex-col justify-around gap-10 primary-color p-3 max-md:m-4 rounded-lg">

          <div>
            <p className="font-bold text-[#0079FE]">Repos</p>
            <p>{public_repos}</p>
          </div>
          <div>
          <p className="font-bold text-[#0079FE]">Updated at:</p>
            <p>{formattedDate}</p>
          </div>
          <div>
            <p className="font-bold text-[#0079FE]">Followers</p>
            <p>{followers}</p>
          </div>
          
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:mx-5 gap-8">
          <div className="flex gap-3 items-center">
            <Image src="/local.png" alt="Github" width={30} height={30}/>
            {location}
          </div>
          <div className="flex gap-3 items-center">
            <Image src="/link.png" alt="Github" width={30} height={30}/>
            {blog && <Link href={blog} className="underline">Portfolio</Link> }
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