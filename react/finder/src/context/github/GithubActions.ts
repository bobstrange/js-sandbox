import {
  GithubActionTypes,
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS
} from './types'

export const searchUsers = (payload): GithubActionTypes => {
  return {
    type: SEARCH_USERS,
    payload
  }
}

export const getUser = (payload): GithubActionTypes => {
  return {
    type: GET_USER,
    payload
  }
}

export const clearUsers = (): GithubActionTypes => {
  return {
    type: CLEAR_USERS
  }
}
