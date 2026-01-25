import React, { useState } from 'react';
import "./styles.css"

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // TODO: Set up state to track the active tab

  const [id, setId] = useState("home"); 
  const [content, setContent] = useState(tabs[0].content); 
  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {/* TODO: Render buttons for each tab */}
        {/* Use data-testid={`tab-button-${tab.id}`} for each button */}
        {tabs.map((tab , index) => {
          return (
            <button data-testid={`tab-button-${tab.id}`} key = {index}
              onClick={() => {
                setId(tab.id);
                setContent(tab.content);
              }}
              className={tab.id == id ? "active" : ""}
            >{tab.label}</button>
          )
        })}
      </div>

      {/* Content */}

      
      <div className="tab-content" data-testid="tab-content">
        {content}
      </div>
    </div>
  );
}
