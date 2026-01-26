import React, { useState } from "react";
import "./LeapYear.module.css";

export default function LeapYear() {

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        data-testid="year-input"
      />

      <button data-testid="check-btn">
        Check
      </button>
    </div>
  );
}