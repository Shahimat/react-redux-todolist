import React, { useState } from 'react';
import './index.css';

import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, changeCheck } from '../../../store/Todos';

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

export default ListItem;
