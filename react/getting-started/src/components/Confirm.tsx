import React, { Component } from 'react'
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

export default class Confirm extends Component<ConfirmProps> {
  static defaultProps = {
    cancelCaption: 'Cancel',
    okCaption: 'OK'
  }

  render() {
    return (
      <div
        className={
          this.props.open
            ? 'confirm-wrapper confirm-visible'
            : 'confirm-wrapper'
        }
      >
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>{this.props.title}</span>
          </div>
          <div className="confirm-content-container">
            <p>{this.props.content}</p>
          </div>
          <div className="confirm-buttons-container">
            <button className="confirm-cancel" onClick={this.handleCancelClick}>
              {this.props.cancelCaption}
            </button>
            <button className="confirm-ok" onClick={this.handleOkClick}>
              {this.props.okCaption}
            </button>
          </div>
        </div>
      </div>
    )
  }

  private handleCancelClick = () => {
    this.props.onCancelClick()
  }

  private handleOkClick = () => {
    this.props.onOKClick()
  }
}
