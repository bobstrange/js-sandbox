import {
  GithubState,
  GithubActionTypes,
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from './types'

const initialState: GithubState = {
   users: [],
   user: null,
   repos: [],
   loading: false,
}

export const githubReducer = (
  state = initialState,
  action: GithubActionTypes
) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: []
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}
