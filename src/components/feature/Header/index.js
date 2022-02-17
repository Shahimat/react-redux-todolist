import React from 'react';
import './index.css';

function Header({ title }) {
  return (
    <div className='header'>
      <h1 className='headerTitle'>{title}</h1>
    </div>
  );
}

export default Header;
