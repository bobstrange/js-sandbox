import React, { Component } from 'react'
import './Confirm.css'

export default class Confirm extends Component {
  render() {
    return (
      <div className="confirm-wrapper confirm-visible">
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>Title</span>
          </div>
          <div className="confirm-content-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="confirm-buttons-container">
            <button className="confirm-cancel">Cancel</button>
            <button className="confirm-ok">OK</button>
          </div>
        </div>
      </div>
    )
  }
}
