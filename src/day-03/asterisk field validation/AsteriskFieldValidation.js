import React, { useState } from 'react';
import "./styles.css";

function AsteriskFieldValidation() {

  let [name, setName] = useState(""); 
  let [location, setLocation] = useState("");  
  let [errorFound, setErrorFound] = useState(0); 

  const checkValidation = () => {
    if (location.trim() == "" && name.trim() == "") {
      setErrorFound(3);
    }
    else if (name.trim() == "") {
      setErrorFound(1);
    }
    else if (location.trim() == "") {
      setErrorFound(2);
    }
    else {
      setErrorFound(0);
      setName(name.trim());
      setLocation(location.trim()); 
    }
  }
  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>
      <form className="form" data-testid = "form">
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            id="name"
            data-testid = "name-input"
            className="input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {(errorFound == 1 || errorFound == 3) ? <p data-testid="name-error" className="error">Name is required.</p> : <></>}
        </div>

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            id="location"
            data-testid = "location-input"
            className="input"
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          {(errorFound == 2 || errorFound == 3) ? <p data-testid="location-error" className="error">Location is required.</p> : <></>}
        </div>

        <button type="button" data-testid = "submit-button" className="submit-button" onClick={() => {
          checkValidation() ; 
        }} >
          Submit
        </button>

        {errorFound == 0 && (location.trim() !== "" && name.trim() !== "") ? (<div className="success-message" data-testid = "success-message">
          <p>Submitted Successfully!</p>
          <p>Name: {name}</p>
          <p>Location: {location}</p>
        </div>) : <></>}
      </form>
    </div>
  );
}

export default AsteriskFieldValidation;
