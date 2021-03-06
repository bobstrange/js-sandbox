import axios, { AxiosResponse } from 'axios'
import { User } from '../types/User'

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
const tokenParams = `client_id=${clientId}&client_secret=${clientSecret}`

const baseUrl = 'https://api.github.com'

export const fetchUsers = (): Promise<AxiosResponse<User[]>> => {
  return axios.get(`${baseUrl}/users?${tokenParams}`)
}

export const searchUsers = (text: string): Promise<AxiosResponse<{ items: User[] }>> => {
  return axios.get(`${baseUrl}/search/users?q=${text}&${tokenParams}`)
}

export const fetchUser = (username: string): Promise<AxiosResponse> => {
  return axios.get(`${baseUrl}/users/${username}?${tokenParams}`)
}

export const fetchRepos = (username: string): Promise<AxiosResponse> => {
  return axios.get(`${baseUrl}/users/${username}/repos?per_page=5&sort=created:asc&${tokenParams}`)
}
