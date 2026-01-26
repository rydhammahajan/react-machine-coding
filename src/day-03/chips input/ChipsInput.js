import React, { useState } from 'react';
import './ChipsInput.module.css'
function ChipsInput() {

  const [inputArray, setInputArray] = useState([]);
  const [value, setValue] = useState("");
  const [counter , setCounter] = useState(0) ; 

  const removeFunction = (id) => {
    let temp = inputArray.filter((item, index) => {
                return item.id != id ;
    })
    setInputArray([...temp]) ; 
  }
  return (
    
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        value={value} 
        onChange={(e) => {
          setValue(e.target.value) ; 
        }}

        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.target.value.trim() != "") {
              let temp = [...inputArray];
              temp.push({id : counter , data : e.target.value.trim()} );
              setInputArray(temp)
              setValue(""); 
              setCounter(counter+1) ; 
            }
          }
        }}
      />

      
      <div className="chip-container">

        {inputArray.length == 0 ? (<></>) :
          (
            inputArray.map((item)=>{
              return (
                <div key={item.id} className="chip">{item.data} <span
                  onClick={((e) => {
                    removeFunction(item.id) ; 
                })}
                >X</span></div>
              )
            })
          )
        }
      </div>
    </div>

  );
}

export default ChipsInput;
