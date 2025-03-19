import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            });
        }
    }
});