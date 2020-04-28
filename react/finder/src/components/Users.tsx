import React, { Component, FC } from 'react'
import { UserItem } from './UserItem'
import { User } from '../types/User'
import { Spinner } from './Spinner'

type UsersProps = {
  loading: boolean,
  users: User[]
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export const Users: FC<UsersProps> = ({ users, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => {
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
}

export default Users
