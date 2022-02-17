import React from 'react';
import './App.css';
import Wrapper from './components/wrapper/Wrapper';
import Header from './components/feature/Header/index';
import Content from './components/content/Content';

function App() {
  return (
    <Wrapper>
      <Header title="TodoMVC"/>
      <Content/>
    </Wrapper>
  );
}

export default App;
