import React from 'react';
import './Wrapper.css';

function App(props) {
  return (
    <div className='wrapper'>
      {props.children}
    </div>
  );
}

export default App;
