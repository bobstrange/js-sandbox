import React, { FC, Component } from 'react'

type SearchProps = {}
type SearchState = {
  text: string
}

export class Search<SearchProps, SearchState> extends Component {
  state = {
    text: ''
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form className="form">
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
      </div>
    )
  }
}
