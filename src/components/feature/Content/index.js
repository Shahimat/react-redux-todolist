import React, { useState } from 'react';
import './index.css';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, changeCheck } from '../../../state/reducer/Todos';

function ListItem ({ id, check, value }) {
  const dispatch = useDispatch();
  const [_id] = useState(id);
  const isChecked = useSelector((state) => {
    let nItemIndex = state.todos.list.findIndex(oItem => oItem.id === _id);
    return nItemIndex !== -1? state.todos.list[nItemIndex].check: false;
  });

  const handleCheck = () => {
    dispatch(changeCheck({ id }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li>
      <div className="ListItemBar">
        <input type="checkbox" id="scales" name="scales" className="checkbox" onChange={handleCheck}/>
      </div>
      <div className="ListItemContent">
        <span className={isChecked? 'ListItemContentTextThrough': ''}>{value}</span>
        <button className="btn-delete" onClick={handleDelete}>x</button>
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

function Content() {
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
    <div className='content'>
      <input
        value={text}
        onChange={handleInputChange}  
        onKeyPress={handleInputAccept}
      />
      <TodoList todos={todos}/>
    </div>
  );
}

export default Content;
