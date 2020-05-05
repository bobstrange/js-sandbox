export interface User {
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

export interface Repo {
  id: string
  name: string
  html_url: string
  description: string | null
  language: string | null
}

export interface Alert {
  message: string
  type: 'light' | 'dark'
}

export interface GithubState {
  users: User[]
  user: User | null
  repos: Repo[]
  loading: boolean
}

export const SEARCH_USERS = 'SEARCH_USERS'
export const GET_USER = 'GET_USER'
export const CLEAR_USERS = 'CLEAR_USERS'
export const GET_REPOS = 'GET_REPOS'
export const SET_LOADING = 'SET_LOADING'
export const SET_ALERT = 'SET_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'

interface SearchUsersAction {
  type: typeof SEARCH_USERS,
  payload: User[]
}

interface GetUserAction {
  type: typeof GET_USER
  payload: User[]
}

interface ClearUsers {
  type: typeof CLEAR_USERS
}

interface GetRepos {
  type: typeof GET_REPOS
  payload: Repo[]
}

interface SetLoading {
  type: typeof SET_LOADING,
  loading: boolean
}

interface SetAlert {
  type: typeof SET_ALERT,
  alert: Alert
}

interface RemoveAlert {
  type: typeof REMOVE_ALERT
}

export type GithubActionTypes =
  | SearchUsersAction
  | GetUserAction
  | ClearUsers
  | GetRepos
  | SetLoading
  | SetAlert
  | RemoveAlert
