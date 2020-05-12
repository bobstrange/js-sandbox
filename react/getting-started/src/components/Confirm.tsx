import React, { Component } from 'react'
import './Confirm.css'

interface ConfirmProps {
  title: string
  content: string
  cancelCaption?: string
  okCaption?: string
}

export default class Confirm extends Component<ConfirmProps> {
  static defaultProps = {
    cancelCaption: 'Cancel',
    okCaption: 'OK'
  }

  render() {
    return (
      <div className="confirm-wrapper confirm-visible">
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>{this.props.title}</span>
          </div>
          <div className="confirm-content-container">
            <p>{this.props.content}</p>
          </div>
          <div className="confirm-buttons-container">
            <button className="confirm-cancel">
              {this.props.cancelCaption}
            </button>
            <button className="confirm-ok">{this.props.okCaption}</button>
          </div>
        </div>
      </div>
    )
  }
}
