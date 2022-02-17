import React, { useState } from 'react';
import './index.css';
import Layout from './../../layout/index';
import Header from './../../components/feature/Header/index';
import TodoList from './../../components/feature/TodoList/index';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../store/Todos';

function Home(props) {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleInputChange = (oEvent) => setText(oEvent.target.value);

  const handleInputAccept = (oEvent) => {
    if (oEvent.code === 'Enter') {
      dispatch(addTodo({ value: text }))
      setText('');
    }
  };

  return (
    <Layout>
      <Header title="TodoMVC"/>
      <div className='HomePageContent'>
        <input
          className='HomePageContentInput'
          value={text}
          onChange={handleInputChange}  
          onKeyPress={handleInputAccept}
        />
        <TodoList todos={todos}/>
      </div>
    </Layout>
  );
}

export default Home;
