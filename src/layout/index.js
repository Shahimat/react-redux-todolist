import React from 'react';
import './index.css';

function Layout(props) {
  return (
    <div className='wrapper'>
      {props.children}
    </div>
  );
}

export default Layout;
