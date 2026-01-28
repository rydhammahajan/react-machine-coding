import React, { useState } from 'react';
import "./ConfirmationModal.module.css";

function ConfirmationModal() {

  const [open, setOpen] = useState(false);
  const [actionStatus , setActionStatus] = useState("") ; 
  return (
     (open == false) ?(<div className="modal-container" >
      <button data-testid="open-modal-button" className="open-modal-btn" onClick={() => {
        setOpen(true); 
        setActionStatus("") ; 
      }}>Open Confirmation Modal</button>
      {actionStatus != "" ? (<div data-testid="action-status" className="action-status">{actionStatus}</div>) : (<></>)}
    </div>
      )
      :
      (
        <div data-testid = "confirmation-modal">
        <div className="modal-backdrop">
        <div className="modal-box">
            <h2 data-testid="modal-title" className="modal-title">Confirm Action</h2>
          <p data-testid = "modal-message" className="modal-message">Are you sure you want to proceed?</p>

          <div className="modal-buttons">
              <button data-testid = "confirm-button" className="confirm-btn" onClick={() => {
                setOpen(false)
              setActionStatus("Confirmed")
             }}>Confirm</button>
              <button data-testid="cancel-button"  className="cancel-btn" onClick={() => {
                setOpen(false)
                setActionStatus("Cancelled")
              }}>Cancel</button>
          </div>
        </div>
          </div>
          </div>)
  )
    
}

export default ConfirmationModal;
