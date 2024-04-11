import { itemProps } from "../types/user";
import Button from "./Button";

const RepoCard = ({id, name, description, clone_url, homepage} : itemProps) => {
  return (
    <div className="primary-color flex flex-col p-8 gap-4 rounded-lg ">
      <h1 className="text-2xl font-bold" key={id}> {name} </h1>

      <p>{description}</p>

      <a href={clone_url}>
        <Button label={"Project URL"} />
      </a>

      {homepage && <a href={clone_url}>
        <Button label={"Deployed Project"} />
      </a>}
      
    </div>
  )
}

export default RepoCard