import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Todo = () => {
    const [text, setText] = useState('');
    const [editText, setEditText] = useState(null);
    const todo = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (task.trim()) {
            dispatch({ type: "ADD_TODO", payload: task }); // Replace with your actual action
            setTask("");
        }
    };

    return (
        <div className="flex flex-row items-center gap-4 p-4">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a todo..."
                className="w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleAddTodo}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
                Add Todo
            </button>
        </div>
    );
};

export default Todo;