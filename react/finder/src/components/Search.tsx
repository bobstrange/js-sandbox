import React, { Component } from 'react'

type SearchProps = {
  searchUsers: (searchText: string) => Promise<void>
  clearUsers: () => void
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
    this.props.searchUsers(this.state.text)
  }

  render() {
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
          this.props.showClear &&
          <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
        }
      </div>
    )
  }
}
