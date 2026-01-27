import React, { useEffect, useState } from 'react';
import './darkMode.module.css'

function DarkModeToggle() {

  const [islight, setIsLight] = useState(true);


  return (
    <div className={`container ` +  (islight? `light-mode` : `dark-mode`)}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch" >
          <input type="checkbox" onClick={() => {
            let temp = islight;
            setIsLight(!islight);
          }} />
          <span className="slider round"
            
          ></span>
          
        </label>
        <div className={(islight ? `light-mode` : `dark-mode`)}>{islight ? "Light" : "Dark"} Mode</div>
        <span className="mode-text"></span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
