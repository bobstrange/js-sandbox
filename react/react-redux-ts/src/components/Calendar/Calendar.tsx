import React, { FC } from 'react'
import './Calendar.css'

const Calendar: FC = () => {
  return (
    <div className="Calendar">
      <div className="Calendar__day">
        <div className="Calendar__day-label day-label">
          <span className="day-label__text">1 February</span>
        </div>
        <div className="Calendar__events">
          <div className="Calendar__event">
            <div className="Calendar__event-info">
              <div className="Calendar__event-time">10:00 - 12:00</div>
              <div className="Calendar__event-title">Programming</div>
            </div>
            <button className="Calendar__event-delete-button">&times;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
