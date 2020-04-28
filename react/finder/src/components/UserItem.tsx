import React, { FC } from "react"

import { User } from '../types/User'
type UserItemProps = {
  user: User
}

export const UserItem: FC<UserItemProps> = (
  { user:{ login, avatar_url, html_url } }
) => {
  return <div className="card text-center">
    <img
      src={avatar_url}
      alt="avatar"
      className="round-img"
      style={{ width: '60px' }}
    />
    <h3>{ login }</h3>
    <div>
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        More
        </a>
    </div>
  </div>
}

export default UserItem
