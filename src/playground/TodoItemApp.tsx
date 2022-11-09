 import axios from "axios";
 import { useEffect , useState } from 'react';

 interface TodoItem {
    id?: number;
    todo: string;
    completed: boolean;
}

interface TodoListProps {
    todos?: TodoItem[] ;
}

const TodoItemsApp = () => {

    const [todoItems, setTodoItems] = useState<TodoItem[]>();
           
    useEffect(() => {
        async function getTotoItems() {
            try {
                const resp = await axios.get('https://dummyjson.com/todos');
                //console.log(resp);
                let todos : TodoItem[] = resp.data.todos;
                //const resp = await axios.get<TodoItem[]>('https://localhost:5001/api/todoitems');
                setTodoItems(todos);
            } catch (err) {
                console.error(err);
            } finally {
                //console.log("done");
            }
        }

        getTotoItems();
    }, []);
    
    return <TodoList todos={todoItems} />;
}

const TodoList: React.FC<TodoListProps> = (props) => {

    return (
            <ul>
            {props.todos?.map(item => (
                <li key={item.id}>
                     <label>Complete <input type="checkbox" name="IsComplete" checked={item.completed}/></label>     
                    <span> {item.todo}</span>                                   
                </li>
            ))}
            </ul>
    );
};

export default TodoItemsApp;