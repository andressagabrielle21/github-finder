type itemProps = {
  id: string,
  name: string,
  description: string,
  clone_url: string,
  homepage: string,
}

export const getRepositories = async (username: string) => {
  const response = await fetch (`https://api.github.com/users/${username}/repos?sort=created&direction=desc`) 
  const data = await response.json();

  if (response.status === 404) {
    return;
  }

  const formattedData = data.map((item : itemProps) => ({
    id: item.id,
    repoName: item.name,
    description: item.description,
    cloneUrl: item.clone_url,
    deployed: item.homepage,
  }));
  
  console.log(formattedData)
  // return formattedData
  return formattedData.map((item: itemProps) => (
    <p key={item.id}> {item.name} </p>
  ));
};