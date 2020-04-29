export type User = {
  id: string
  login: string
  avatar_url: string
  html_url: string
  name: string
  location: string
  bio: string | null
  blog: string
  company: string
  followers: number
  following: number
  public_repos: number
  public_gists: number
  hireable: boolean | null
}
