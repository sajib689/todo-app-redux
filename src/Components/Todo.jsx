import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addTodo,
  toggleTodo,
  removeTodo,
  editTodo,
  loadTodos,
} from "../Redux/TodoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (savedTodos.length > 0) {
    //   savedTodos.forEach((todo) => {
    //     dispatch({
    //       type: "todo/loadFromStorage",
    //       payload: todo,
    //     });
    //   });
      dispatch(loadTodos(savedTodos));
    }
  }, [dispatch]);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleAddTodo = () => {
    if (text.trim()) {
      if (editId) {
        dispatch(editTodo({ id: editId, text }));
        setEditId(null);
      } else {
        dispatch(addTodo(text));
      }
      setText("");
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-row items-center gap-4 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Task</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{item.text}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => dispatch(toggleTodo(item.id))}
                  className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 transition-all mr-2"
                >
                  {item.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => dispatch(removeTodo(item.id))}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-all"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setText(item.text);
                    setEditId(item.id);
                  }}
                  className="bg-green-500 ms-2 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-all"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
