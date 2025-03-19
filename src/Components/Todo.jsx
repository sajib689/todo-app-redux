import { useDispatch, useSelector } from "react-redux";


const Todo = () => {
    const todo = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    console.log(todo);
    return (
        <div>
            
        </div>
    );
};

export default Todo;