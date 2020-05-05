import {
  GithubActionTypes,
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  User,
  Repo,
  Alert,
  SET_ALERT,
  REMOVE_ALERT
} from './types'

export const searchUsers = (payload: User[]): GithubActionTypes => {
  return {
    type: SEARCH_USERS,
    payload
  }
}

export const getUser = (payload: User): GithubActionTypes => {
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

export const getRepos = (payload: Repo[]): GithubActionTypes => {
   return {
     type: GET_REPOS,
     payload
   }
}

export const setLoading = (loading: boolean): GithubActionTypes => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const setAlert = (alert: Alert): GithubActionTypes => {
  return {
    type: SET_ALERT,
    alert
  }
}

export const removeAlert = (): GithubActionTypes => {
  return {
    type: REMOVE_ALERT
  }
}
