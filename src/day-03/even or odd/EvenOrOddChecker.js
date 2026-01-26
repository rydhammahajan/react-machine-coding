import React, { useState , useEffect } from 'react';
import "./EvenOrOddChecker.css";

function EvenOrOddChecker() {

  const [value, setValue] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [loading , setLoading] = useState(false) ; 

  const checkInput = () => {
    //Firstly remove trailing spaces 
    setLoading(true); 
    const copyValue = value.trim();
    //Check if the input is empty 
    if (copyValue === "" || Number.isNaN(Number(copyValue))) {
      setMessage("Please enter a valid number.");
    } else {

      if (copyValue % 2 == 0) {
        setMessage(`The number ${copyValue} is even.` ) ; 
      } else {
        setMessage(`The number ${copyValue} is odd.`);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false) ; 
    },1000)
  }, [loading]);

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
      data-testid = "number-input"
        className="number-input"
        type="text"
        placeholder="Enter a number"
        value={value} 
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button data-testid = "check-button" className="check-button" onClick={() => {
        checkInput(); 
      }}>Check</button>

      <div className="result-area">
        {loading ? (<div data-testid="loading" >Checking...</div>): 
        (<div data-testid = "result" className="result">{message}</div>)}
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
