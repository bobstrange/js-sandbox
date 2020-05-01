import React, { useReducer } from "react"
import GithubContext from "./GithubContext"
import GithubReducer from './githubReducer'

import { searchUsers } from "../../services/githubClient"

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types'

const GithubState = props => {
  const initialState = {
    users: [],
    user: null,
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const searchUsers: SearchProps["searchUsers"] = async (searchText) => {
    dispatch({
      type: SET_LOADING,
      payload: true
    })
    const response = await searchUsers(searchText)
    dispatch({
      type: SEARCH_USERS,
      payload: response.data
    })
    dispatch({
      type: SET_LOADING,
      payload: false
    })
  }

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading
    }}
  >
    {props.children}
  </ GithubContext.Provider>
}

export default GithubState
