// Counter.js
import React, { useState } from "react";

const Counter = () => {

  const [value , setValue] = useState(0) ; 
  const Increment = () => {
    setValue(value + 1); 
  }

  const Decrement = () => {
    if (value > 0) {
      setValue(value-1) ; 
    }
  }

  const Reset = () => {
    setValue(0) ; 
  }
  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={() => {
        Increment(); 
      }}>Increment</button>
      <button onClick={() => {
        Decrement();
      }}>Decrement</button>
      <button onClick={() => {
        Reset();
      }}>Reset</button>
    </div>
  );
};

export default Counter;
