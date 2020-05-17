import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  useState,
  useEffect
} from 'react'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'
import 'url-search-params-polyfill'
import './Header.css'

const Header: FC<RouteComponentProps> = ({ location, history }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    setSearch(searchParams.get('search') || '')
  }, [location])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  const handleSearchKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      history.push(`/products?search=${search}`)
    }
  }

  return (
    <header className="Header">
      <div className="Header-search">
        <input
          type="search"
          placeholder="search..."
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeydown}
        />
      </div>
      <h1 className="Header-title">TypeScriptBooks</h1>
      <nav>
        <NavLink
          to="/products"
          className="Header-link"
          activeClassName="Header-link-active"
        >
          Products
        </NavLink>
        <NavLink
          to="/admin"
          className="Header-link"
          activeClassName="Header-link-active"
        >
          Admin
        </NavLink>
      </nav>
    </header>
  )
}

export default withRouter(Header)
