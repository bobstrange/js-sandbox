import React, { Component } from "react"

type UserItemState = {
  id: string
  login: string
  avatar_url: string
  html_url: string
}

export class UserItem extends Component<{}, UserItemState> {
  state = {
    id: "id",
    login: "bob1983",
    avatar_url: "https://avatars3.githubusercontent.com/u/1381585?s=460&v=4",
    html_url: "https://github.com/bob1983"
  }
  // constructor(props: any) {
  //   super(props)
  //   this.state = {
  //     id: "id",
  //     login: "bob1983",
  //     avatar_url: "https://avatars3.githubusercontent.com/u/1381585?s=460&v=4",
  //     html_url: "https://github.com/bob1983"
  //   }
  // }

  render() {
    const { login, avatar_url, html_url } = this.state

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
}

export default UserItem
