import React, { useState} from "react";
import{ MenuIcon }from "lucide-react" ; 
import "./Sidebar.module.css";

function Sidebar() {

  const [show, setShow] = useState(false);
  
  return (
    <div className={`sidebar ${show ? "open" : ""}`}
data-testid = "sidebar"
    >
      <button data-testid = "btn-toggle" className="toggle-btn" onClick={() => {
        setShow(prev => {
          return !prev
        })
      }}><MenuIcon  data-testid = "icon-menu"/></button>

      {show && <nav data-testid = "nav-menu" className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item" data-testid = "nav-item-home">Home</li>
          <li className="nav-item" data-testid= "nav-item-about">About</li>
          <li className="nav-item" data-testid= "nav-item-services">Services</li>
          <li className="nav-item" data-testid= "nav-item-contact">Contact</li>
        </ul>
      </nav>}
    </div>
  );
}

export default Sidebar;
