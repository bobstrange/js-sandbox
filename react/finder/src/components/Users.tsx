import React, { Component, FC } from 'react'
import { UserItem } from './UserItem'
import { User } from '../types/User'

type UsersProps = {
  loading: boolean,
  users: User[]
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export const Users: FC<UsersProps> = (props) => {
  return (
    <div style={userStyle}>
      {props.users.map(user => {
        return (
          <UserItem
            key={user.id}
            user={user}
          />
        )
      })}
    </div>
  )
}

export default Users
