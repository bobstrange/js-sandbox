import React, { FC } from 'react'
import './Confirm.css'

interface ConfirmProps {
  open: boolean
  title: string
  content: string
  cancelCaption?: string
  okCaption?: string
  onCancelClick: () => void
  onOKClick: () => void
}

const Confirm: FC<ConfirmProps> = (props) => {
  const handleCancelClick = () => {
    props.onCancelClick()
  }

  const handleOkClick = () => {
    props.onOKClick()
  }

  return (
    <div
      className={
        props.open ? 'confirm-wrapper confirm-visible' : 'confirm-wrapper'
      }
    >
      <div className="confirm-container">
        <div className="confirm-title-container">
          <span>{props.title}</span>
        </div>
        <div className="confirm-content-container">
          <p>{props.content}</p>
        </div>
        <div className="confirm-buttons-container">
          <button className="confirm-cancel" onClick={handleCancelClick}>
            {props.cancelCaption}
          </button>
          <button className="confirm-ok" onClick={handleOkClick}>
            {props.okCaption}
          </button>
        </div>
      </div>
    </div>
  )
}

Confirm.defaultProps = {
  cancelCaption: 'Cancel',
  okCaption: 'OK'
}

export default Confirm
