import React, { useState } from 'react';
import './Content.css';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../state/reducer/Todos';

function ListItem ({ value }) {
  return (
    <li>
      {value}
    </li>
  );
}

function TodoList({ todos }) {
  const aListItems = todos.map(({ id, value }) =>
    <ListItem key={`${id}`} value={value} />
  );
  return (
    <ul>
      {aListItems}
    </ul>
  );
}

function App() {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  return (
    <div className='content'>
      <input
        value={text}
        onChange={(oEvent) => setText(oEvent.target.value)} 
        onKeyPress={oEvent => {
          if (oEvent.code === 'Enter') {
            dispatch(addTodo({ value: text }))
            setText('');
          }
        }}
      />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
