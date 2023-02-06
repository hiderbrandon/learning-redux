import { createSlice } from '@reduxjs/toolkit'


const toDoListSlice = createSlice({
  name: 'TodoList',
  initialState: {
    value:  [<li key={0}> item 1</li>, <li key={1}>item 2</li>, <li key={2}> item 3</li>]
  },
  reducer: {
     addTodo : state => {
      return {
        type: 'todos/todoadded',
        payload: state.value.push( <li key={state.length}> new item</li>)
      }
    }
    ,
    removeTodo : state => {
      return {
        type: 'todos/todoremoved',
        payload: state.value.pop()
      }
    },
  }
});

export const { addTodo, removeTodo } = toDoListSlice.actions;

export default toDoListSlice;