import React from 'react';
/* import { AppUI } from './AppUI'; */
import { TodoProvider } from '../TodoContext/';
// import './App.css';

/* const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el cursso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: true },
    { text: 'LALALALAA', completed: false },
]; */

function App() {
    const [state, setState] = React.useState('estado Compartido');

    return (
        <>
            <TodoHeader>
                <TodoCounter />
                <TodoSearch />
            </TodoHeader>

            <TodoList>
                <TodoItem state={state}/>
            </TodoList>
        </>
    );
}

function TodoHeader({ children }) {
    return <header>{children}</header>;
}

function TodoList({ children }) {
    return <section className="TodoList-container">{children}</section>;
}

function TodoCounter() {
    return <p>TodoCounter</p>;
}

function TodoSearch() {
    return <p>TodoSearch</p>;
}

function TodoItem({state}) {
    return <p>TodoItem: {state}</p>;
}
/* function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
} */

export default App;
