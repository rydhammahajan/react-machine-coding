import { useState } from 'react';
import "./copyClipboard.module.css"

function CopyClipboard() {

  const [value, setValue] = useState("");
  const [errorFound, setErrorFound] = useState(false); 
  const [success, setSuccess] = useState(false); 

  function handleCopy() {
    let text = value; 
    text = text.trim(); 
    if (text == "") {
      setErrorFound(true); 
    } else {
      navigator.clipboard.writeText(value);
      setErrorFound(false); 
      setSuccess(true); 
      setTimeout(() => {
        setSuccess(false);
      }, 2000) ; 
    }

    
  }

  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              data-testid="input-field"
              placeholder="Type Something"
              value={value} 
              data-testid = "input-field"
              onChange={(e) => {
                setValue(e.target.value) ; 
              }}
            />
          </label>
          <button
            data-testid = "copy-button"
            onClick={() => {
              handleCopy();
            }}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
        </div>
        {(errorFound)?
          (<div data-testid = "error-message" className = "errorMessage">Type some values to copy</div>) : (<></>)}
        {(success) ?
          (<div data-testid = "copied-message" className = "message">copied</div>) : (<></>)}


      </div>
    </div>
  );
}

export default CopyClipboard;
