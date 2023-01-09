import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

// const fetchTodos = createAsyncThunk('https://jsonplaceholder.typicode.com/todos/1',
//     async () => {
//         const response = await
//     }
// )

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, payload) => {
      return [...state.todos, payload];
    },
    removeTodo: (state, payload) => {
      return state.todos.filter((todo) => todo.id !== payload.id);
    },
    // getTodo: async (state) => {
    //   fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     .then((response) => response.json())
    //     .then((json) => (state.list = json));
    // },
  },
});

export const { addTodo, removeTodo, getTodo } = todoSlice.actions;

export default todoSlice.reducer;
