import React from 'react';
import './index.css';
import Wrapper from './../../components/wrapper/Wrapper';
import Header from './../../components/feature/Header/index';
import Content from './../../components/content/Content';

function Home(props) {
  return (
    <Wrapper>
      <Header title="TodoMVC"/>
      <Content/>
    </Wrapper>
  );
}

export default Home;
