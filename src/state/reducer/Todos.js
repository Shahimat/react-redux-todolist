import { createSlice } from '@reduxjs/toolkit';
import { getUniqId } from './../../lib/slf';

const initialState = {
  list: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { value } = action.payload;
      state.list.unshift({
        id: getUniqId(),
        value,
      });
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.list = state.list.filter(oItem => oItem.id !== id);
    },
  },
});

export const { addTodo, deleteTodo } = counterSlice.actions;

export default counterSlice.reducer;