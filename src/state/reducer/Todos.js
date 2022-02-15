import { createSlice } from '@reduxjs/toolkit';

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
        id: `${state.list.length}`,
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