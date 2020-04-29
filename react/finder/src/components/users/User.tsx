import React, { Component, Fragment } from 'react'
import { User as UserType } from '../../types/User'
import { RouteComponentProps, Link } from 'react-router-dom'
import { Spinner } from '../Spinner'

export interface UserProps extends RouteComponentProps<{ login: string }> {
  getUser: (loginName: string) => Promise<void>
  user: UserType | null
  loading: boolean
}

export class User extends Component<UserProps> {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }
  render() {
    const { loading } = this.props

    if (loading) {
      return <Spinner />
    }

    if (!this.props.user) {
      return null
    }

    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      company,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
    } = this.props.user

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">Back to Search</Link>
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} alt="avatar" className="round-img" style={{ width: '150px'}}/>
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {
              bio && <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            }
            <a href={html_url} className="btn btn-dark my-1">Github Profile</a>
            <ul>
              <li>
                {
                  login && <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                }
              </li>
              <li>
                {
                  company && <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                }
              </li>
              <li>
                {
                  company && <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                }
              </li>
              <li>
                {
                  blog && <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-white">Public repos: {public_repos}</div>
          <div className="badge badge-dark">Public gists: {public_gists}</div>
        </div>
      </Fragment>
    )
  }
}

export default User
