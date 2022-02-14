import React, { useState, useEffect } from 'react';
import './Content.css';

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
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log(todos);
  });
  return (
    <div className='content'>
      <input
        value={text}
        onChange={(oEvent) => setText(oEvent.target.value)} 
        onKeyPress={oEvent => {
          if (oEvent.code === 'Enter') {
            setTodos((aTodos) => [{
              id: aTodos.length,
              value: text,
            }, ...aTodos]);
            setText('');
          }
        }}
      />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
