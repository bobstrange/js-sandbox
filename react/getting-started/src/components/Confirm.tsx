import React, { FC, useState, useEffect } from 'react'
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
  useEffect(() => {
    console.log('Confirm rendering')
    return () => { console.log('Confirm unmounted') }
  }, [])

  const [cancelClickCount, setCancelClickCount] = useState(0)

  const handleCancelClick = () => {
    const newCount = cancelClickCount + 1
    setCancelClickCount(newCount)
    if (newCount >= 2) {
      props.onCancelClick()
    }
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
            {cancelClickCount === 0 ? props.cancelCaption : 'Really !?'}
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
