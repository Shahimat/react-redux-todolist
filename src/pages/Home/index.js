import React from 'react';
import './index.css';
import Layout from './../../layout/index';
import Header from './../../components/feature/Header/index';
import Content from './../../components/feature/Content/index';

function Home(props) {
  return (
    <Layout>
      <Header title="TodoMVC"/>
      <Content/>
    </Layout>
  );
}

export default Home;
