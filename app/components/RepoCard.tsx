export type itemProps = {
  id: string,
  repoName: string,
  description: string,
  cloneUrl: string,
  deployed: string,
}

type RepoProp = {
  user: (username: string) => Promise<string>;
}

const RepoCard = ({user}: RepoProp) => {
  const data = actions(user)

  return (
    <div className="m-auto primary-color border-[1.5px]">
      {data.map((item: itemProps) => (
        <p>{item.repoName}</p>
      ))}
    </div>
  )
}

export default RepoCard