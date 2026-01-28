import React, { useRef } from 'react';
import "./FocusInput.module.css"

function InputFocus() {

  const ref = useRef(null); 
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input ref={ref}
        type="text"
        placeholder="Type here"
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button style={{ padding: '8px 12px' }} onClick={() => {
        ref.current.focus();
      }}>
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
