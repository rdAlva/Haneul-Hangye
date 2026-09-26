import React from 'react'
import './AccModal.css'
import logo from '../assets/logo.png'

function AccModal({ isOpen, onClose, onConfirm }) {

  return (
    <div className ="acc-modal-background">
      <div className="acc-modal-container">
        <div className='close-btn'>
          <img className="logo-img" src={logo} alt="Haneul Hangye" />
          <button onClick={() => onClose(false)}> X </button>
          </div>
        <div className='title'>
          <p>Are you sure you want to log out?</p>
        </div>
        <div className='body'>
          <p>Logging out will sign you out of your account.</p>
        </div>
        <div className='footer'>
          <button onClick={() => onClose(false)}>Cancel</button>
          <button onClick={() => onConfirm()}>Confirm</button>
        </div>
      </div>
    </div>
  )

}export default AccModal