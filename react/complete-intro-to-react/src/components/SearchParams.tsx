import React, { useState } from 'react'

export const SearchParams: React.FC = () => {
  const [location, setLocation] = useState('Seattle, WA')

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location..."
            onChange={(e) => setLocation(e.target.value)}
            type="text"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
