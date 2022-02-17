import { createSlice } from '@reduxjs/toolkit';
import { getUniqId } from './../lib/slf';

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
        check: false,
      });
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.list = state.list.filter(oItem => oItem.id !== id);
    },
    changeCheck: (state, action) => {
      const { id } = action.payload;
      let nItemIndex = state.list.findIndex(oItem => oItem.id === id);
      if (nItemIndex !== -1) {
        state.list[nItemIndex].check = !state.list[nItemIndex].check;
      }
    },
  },
});

export const { addTodo, deleteTodo, changeCheck } = counterSlice.actions;

export default counterSlice.reducer;