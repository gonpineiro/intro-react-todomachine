import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoHeader } from '../TodoHeader';
// import './App.css';

/* const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el cursso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: true },
    { text: 'LALALALAA', completed: false },
]; */

function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
        completedTodos,
        totalTodos,
        setSearchValue,
        searchValue,
        addTodo,
    } = useTodos();

    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
                <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
            </TodoHeader>

            <TodoList>
                {error && <p>Hubo un error</p>}
                {loading && <p>Estamos cargando...</p>}
                {!loading && !searchedTodos.length && <p>Crea tu primer TODO...</p>}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
}

export default App;
