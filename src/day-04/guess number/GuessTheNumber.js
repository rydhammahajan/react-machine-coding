import React, { useEffect, useState } from 'react';
import './GuessTheNumber.module.css'

function GuessTheNumber() {

  const [inputValue, setInputValue ] = useState(""); 
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0); 
  const [randomNumber, setRandomNumber] = useState(0); 
  
  // Function to handle guess checking

  useEffect(() => {
    if (count == 0) {
      setRandomNumber(Math.floor(Math.random() * 100+1));
    }
  }, [count]);

  const handleGuess = () => {

    // setCount(count + 1); 
    if (!(inputValue >= 1 && inputValue <= 100)) {
      setResult("Please enter a number between 1 and 100");
    }
    else if (inputValue > randomNumber) {
      setResult("Too high! Try again.");
      setCount(count + 1); 
    } else if (inputValue < randomNumber) {
      setResult("Too low! Try again.");
      setCount(count + 1); 
    } else {
      setResult(`Congratulations! You guessed the number in ${count + 1} attempts.`) ; 
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setCount(0); 
    setResult("")
    setInputValue(""); 
    setRandomNumber(0); 
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0"}}>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        onChange= {(e) => {
          console.log(e.target.value)
          setInputValue(e.target.value)
        }}
      value = {inputValue}
        id="guess-input"
      />

      <div >
        <button onClick={
          () => {
            handleGuess(); 
          }
        }>Check Guess</button>
        <button onClick={
          () => {
            resetGame();  
          }
        }>Reset Game</button>
      </div>

      <div>{result}</div>

    </div>
  );
}

export default GuessTheNumber;
