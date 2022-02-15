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
  },
});

export const { addTodo } = counterSlice.actions;

export default counterSlice.reducer;