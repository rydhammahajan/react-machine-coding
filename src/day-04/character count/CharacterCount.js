import { useState } from "react";
import "./CharacterCount.css"

function CharacterCount() {

  const [maxLength, setMaxLength] = useState(50); 
  const [text, setText] = useState("");
  // function handleChange(e) {}

  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input type="number" min="0" max="1000" data-testid="maxlength" 
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 0 && value <= 1000) {
                  setMaxLength(value);
                }
              }}
            />
          </label>
        </div>
        <textarea data-testid = "textarea"
          className="text"
          placeholder="Start Typing"
          
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>

        <div data-testid = "char-info" className="char-info">{`${text.length} / ${maxLength }`}</div>

        <div className="warnings" >
          {/* Show Warning if it reaches to 90 */}
          {((text.length >= (90 * maxLength)/100) && text.length <= maxLength) && <p className="warning-text" data-testid="warning-text">You are close to the limit!</p>}

          {/* Show  Overlimit message if limit is exceeded*/}
          {(text.length > maxLength) && <p className="error-message" data-testid="error-text">Limit exceeded by {text.length - maxLength} characters</p>}
        </div>
      </div>
    </div>
  );
}
export default CharacterCount;
