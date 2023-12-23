export type UserProps = {
  avatar_url: string,
  name: string,
  login: string,
  location: string,
  blog: string,
  bio: string,
  company: string,
  public_repos: number,
  followers: number,
  updated_at: Date
}

export type itemProps = {
  id: string,
  name: string,
  description: string,
  clone_url: string,
  homepage: string,
}