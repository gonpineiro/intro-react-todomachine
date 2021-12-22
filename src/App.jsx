//import './App.css';

import { CreateTodoButton } from "./CreateTodoButton";
import {TodoCounter} from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todos = [
    { text: 'Cortar Cebolla', completed: false },
    { text: 'Tomar un curso', completed: false },
    { text: 'Llorar conon la llorona', completed: false },
];

function App() {
    return (
        <>
            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {todos.map((todo, key) => (
                    <TodoItem text={todo.text} key={key} />
                ))}
            </TodoList>
            <CreateTodoButton />
        </>
    );
}

export default App;
