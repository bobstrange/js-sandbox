import React, { Component } from 'react'

export type AlertType = 'light' | 'dark'
export type SearchProps = {
  searchUsers: (searchText: string) => Promise<void>
  clearUsers: () => void
  setAlert: (message: string, alertType: AlertType) => void
  showClear: boolean
}

type SearchState = {
  text: string
}

export class Search extends Component<SearchProps, SearchState>{
  state = {
    text: ''
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name as keyof SearchState]: e.target.value
    })
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light')
      return
    }
    this.props.searchUsers(this.state.text)
  }

  render() {
    const { clearUsers, showClear } = this.props

    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {
          showClear &&
          <button
            className="btn btn-light btn-block"
            onClick={clearUsers}
          >
            Clear
          </button>
        }
      </div>
    )
  }
}
