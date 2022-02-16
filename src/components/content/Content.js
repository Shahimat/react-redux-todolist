import React, { useState } from 'react';
import './Content.css';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, changeCheck } from '../../state/reducer/Todos';

function ListItem ({ id, check, value }) {
  const dispatch = useDispatch();
  const [_id] = useState(id);
  const isChecked = useSelector((state) => {
    let nItemIndex = state.todos.list.findIndex(oItem => oItem.id === _id);
    return nItemIndex !== -1? state.todos.list[nItemIndex].check: false;
  });
  return (
    <li>
      <div className="ListItemBar">
        <input type="checkbox" id="scales" name="scales" className="checkbox" onChange={oEvent => {
          dispatch(changeCheck({ id: _id }));
        }}/>
      </div>
      <div className="ListItemContent">
        <span className={isChecked? 'ListItemContentTextThrough': ''}>{value}</span>
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
