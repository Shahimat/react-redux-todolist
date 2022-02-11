import React, { useState, useEffect } from 'react';
import './Content.css';

function App() {
  const [text, setText] = useState('');
  useEffect(() => {
    console.log(text);
  });
  return (
    <div className='content'>
      <input
        value={text}
        onChange={(oEvent) => setText(oEvent.target.value)} 
        onKeyPress={oEvent => {
          if (oEvent.code === 'Enter') {
            setText('');
          }
        }}
      />
      <p>{text}</p>
    </div>
  );
}

export default App;
