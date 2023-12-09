export type itemProps = {
  id: string,
  name: string,
  description: string,
  clone_url: string,
  homepage: string,
}

interface userProp {
  user: (user: string) => void;
}

// const actions = (user : string) => {

//   const getRepositories = async () => {
//     const response = await fetch (`https://api.github.com/users/${user}/repos?sort=created&direction=desc`) 
//     const data = await response.json();

//     const formattedData = data.map((item : itemProps) => ({
//       id: item.id,
//       repoName: item.name,
//       description: item.description,
//       cloneUrl: item.clone_url,
//       deployed: item.homepage,
//     }));
    
//     console.log(formattedData)
//     return formattedData
        
//   };

//   getRepositories();

//   return (
//     <p>{getRepositories(user)}</p>
//   )
// }

// export default actions

// page is a paramater
// number is the TYPE of the parameter (typescript)
export const actions = async (user: userProp) => {
    const response = await fetch (`https://api.github.com/users/${user}/repos?sort=created&direction=desc`) 
    const data = await response.json();

    const formattedData = data.map((item : itemProps) => ({
      id: item.id,
      repoName: item.name,
      description: item.description,
      cloneUrl: item.clone_url,
      deployed: item.homepage,
    }));
    
    console.log(formattedData)

  // Needed to convert it to a TSX file because of the components call
  // Now returning as a map over page
  return data.map((item: itemProps) => (
    <p key={item.id}> {item.name} </p>
  ));
};