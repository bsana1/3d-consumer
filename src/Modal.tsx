import React from 'react'
import './Modal.css'

const Modal = () => {
  return (
    <>
      <button id="myBtn">Open Modal</button>
      <div id="myModal" className="modal">

        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>

      </div>
    </>
  )
}

export default Modal