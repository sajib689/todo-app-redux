import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: new Date(),
                text: action.payload,
                completed: false
            })
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

export const { addTodo, removeTodo, toggleComplete } = TodoSlice.actions;
export default TodoSlice.reducer;