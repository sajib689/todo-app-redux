import { configureStore } from "@reduxjs/toolkit";
import myTodo from './TodoSlice'
const store = configureStore({
    reducer: {
        todos: myTodo
    }
})

export default store;