import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  todo:[],
}

export const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    addTodo(state, action){
       state.todo.push(action.payload)
    },
   deleteTodo(state, action){
      state.todo = state.todo.filter((item)=> item.id !== action.payload)
   },
   completeTodo(state, action){
       const todos = state.todo.find((todo)=> todo.id === action.payload);
       todos.completed = !todos.completed;
   },

   editTodo(state, action){
       const todos = state.todo.find((todo)=> todo.id === action.payload.id);
       todos.title = action.payload.title;
       console.log(action);
   },
   clearTodo(){
       return initialState;
   }
  }
})

export const todoReducer = todoSlice.reducer;

export  const { addTodo, deleteTodo, editTodo, completeTodo, clearTodo} = todoSlice.actions;


