import React, { FC } from 'react'
type AlertProps = {
  alert: {
    message: string,
    type: string
  } | null
}

export const Alert: FC<AlertProps> = ({ alert }) => {
  if (alert) {
    return (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle">{alert.message}</i>
      </div>
    )
  }
  return null
}
