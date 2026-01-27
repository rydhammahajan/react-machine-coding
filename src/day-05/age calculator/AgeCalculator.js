import React, { useState } from 'react';
import './ageCalculator.module.css' 

function AgeCalculator() {

  const [value, setValue] = useState(""); 
  const [age, setAge] = useState(null);
  const [error, setError] = useState(null);

  const ageCalculator = ()=>{

    const birth = new Date(value);
    const today = new Date(); 

    if (value == "") {
      setError("Please select a date"); 
      return;
    }

    if (birth > today) {
      setError("Birthdate cannot be in the future"); 
      return;
    }


    //Calculate 
    let date = today.getDate() - birth.getDate() ; 
    let month = today.getMonth() - birth.getMonth();
    let year = today.getFullYear() - birth.getFullYear();

    if (date < 0) {
      date += new Date(today.getFullYear(), today.getMonth() , 0).getDate() ; 
      month--;
    }
    if (month < 0) {
      month += 12 ; 
      year-- ; 
    }

    setAge({date , month , year}) ; 
    
  }
  return (
    <div className="conatiner">
      <h2 className="title">Age Calculator</h2>
      <label className="label" data-testid="label-birthdate">Enter/Select a birthdate:</label>
      <input id="birthdate" type="date" className="input-date" value={value} data-testid = "input-birthdate"
        onChange={(e) => {
          setAge(null);
          setError(null);
          setValue(e.target.value);
      }}
      />
      <button className="btn-calc" data-testid="btn-calculate"  onClick={() => {
        ageCalculator() ; 
      }}>Calculate Age</button>
      <p className="error-msg"></p>
      <p className="age-result"></p>

      {age && <div className="age-result" data-testid="age-result">
        {age.year} years, {age.month} months, {age.date} days
      </div>}
      {error && <div className="error-msg" data-testid="error-msg">
        {error}
      </div>}
    </div>
  );
}

export default AgeCalculator;
