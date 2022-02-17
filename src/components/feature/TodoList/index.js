import React from 'react';
import './index.css';

import TodoListItem from './../TodoListItem/index';

function TodoList({ todos }) {
  const aListItems = todos.map(({ id, value }) =>
    <TodoListItem key={`${id}`} id={`${id}`} value={value} />
  );
  return (
    <ul>
      {aListItems}
    </ul>
  );
}

export default TodoList;
