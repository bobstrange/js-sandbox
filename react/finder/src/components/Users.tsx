import React, { Component } from 'react'
import { UserItem } from './UserItem'
import { User } from '../types/User'

type UsersState = {
  users: User[]
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export class Users extends Component<{}, UsersState> {
  state = {
    users: [
      {
        id: "id",
        login: "bob1983",
        avatar_url: "https://avatars3.githubusercontent.com/u/1381585?s=460&v=4",
        html_url: "https://github.com/bob1983"
      },
      {
        id: "id",
        login: "bob1983",
        avatar_url: "https://avatars3.githubusercontent.com/u/1381585?s=460&v=4",
        html_url: "https://github.com/bob1983"
      },
      {
        id: "id",
        login: "bob1983",
        avatar_url: "https://avatars3.githubusercontent.com/u/1381585?s=460&v=4",
        html_url: "https://github.com/bob1983"
      }
    ]
  }

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => {
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
