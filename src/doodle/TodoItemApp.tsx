 import axios from "axios";
 import { useEffect , useState } from 'react';

 interface TodoItem {
    id?: number;
    name: string;
    isComplete: boolean;
}

interface TodoListProps {
    items?: TodoItem[] ;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return (
            <ul>
            {props.items?.map(item => (
                <li key={item.id}>
                    <span>{item.name}</span>
                    <input type="checkbox" name="IsComplete" checked={item.isComplete} readOnly/>
                </li>
            ))}
            </ul>
    );
};

const TodoItemsApp = () => {

    const [todoItems, setTodoItems] = useState<TodoItem[]>();
           
    useEffect(() => {
        async function getTotoItems() {
            try {
                const resp = await axios.get<TodoItem[]>('http://localhost:5000/api/todoitems');
                //const resp = await axios.get<TodoItem[]>('https://localhost:5001/api/todoitems');
                setTodoItems(resp.data);
            } catch (err) {
                console.error(err);
            } finally {
                //console.log("done");
            }
        }

        getTotoItems();
    }, []);
    
    return <TodoList items={todoItems} />;
}

export default TodoItemsApp;