import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducer/Todos';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})