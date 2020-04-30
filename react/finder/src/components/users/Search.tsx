import React, { FC, useState } from 'react'

export type AlertType = 'light' | 'dark'
export type SearchProps = {
  searchUsers: (searchText: string) => Promise<void>
  clearUsers: () => void
  setAlert: (message: string, alertType: AlertType) => void
  showClear: boolean
}

export const Search: FC<SearchProps> = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please enter something', 'light')
      return
    }
    searchUsers(text)
    setText('')
  }

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
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
