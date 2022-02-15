import React, { useState } from 'react';
import './Content.css';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../../state/reducer/Todos';

function ListItem ({ id, value }) {
  const dispatch = useDispatch();
  const [_id, _setID] = useState(id);
  return (
    <li>
      <div className="ListItemContent">
        <span>{value}</span>
        <button className="btn-delete" onClick={oEvent => {
          dispatch(deleteTodo({ id: _id }));
        }}>x</button>
      </div>
    </li>
  );
}

function TodoList({ todos }) {
  const aListItems = todos.map(({ id, value }) =>
    <ListItem key={`${id}`} id={`${id}`} value={value} />
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
