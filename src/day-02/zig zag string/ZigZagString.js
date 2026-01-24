import React, { useState } from 'react';
import "./styles.css" ;

const ZigzagString = () => {

  const [value, setValue] = useState(""); 
  const [result, setResult] = useState(""); 

  const zigzagConverter = () => {

    const input = value.split(","); 

    for (let index = 0; index < input.length; index++){
      if (index % 2 != 0) {
        input[index] = input[index].split("").reverse().join("");
      }
    }
    

    setResult(input.join().replaceAll("," , "")) ; 
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter strings like one,two,three"
        data-testid="input-box"
        value={value} 
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button data-testid="submit-button"
        onClick={() => {
          zigzagConverter(); 
      }}
      >
        Submit
      </button>
      <p data-testid="output-result">Output: {result}</p>
    </div>
  );
};

export default ZigzagString;
