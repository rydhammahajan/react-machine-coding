import { useEffect, useState } from "react";

function AutoSaveInput() {
  const [text, setText] = useState(localStorage.getItem("autoText")|| "");

  useEffect(() => {
    const saved = localStorage.getItem("autoText")
    if (saved) setText(saved);
  }, [])


  useEffect(() => {
    localStorage.setItem("autoText", text)
  }, [text])

  return (
    <div>
      <h1>Auto Save Input</h1>

      {/* your code here  */}

      <div>Name</div>
      <input type="text" data-testid="input-field"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button data-testid="clear-btn"
        onClick={() => {
          setText("");
          localStorage.removeItem("autoText");

        }}
      >Clear</button>

    </div>
  );
}

export default AutoSaveInput;
