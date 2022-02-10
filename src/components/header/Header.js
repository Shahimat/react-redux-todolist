import React from 'react';
import './Header.css';

function App({ title }) {
  return (
    <div className='header'>
      <h1 className='headerTitle'>{title}</h1>
    </div>
  );
}

export default App;
