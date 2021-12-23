import React from 'react';

import { TodoContext } from '../TodoContext';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoHeader } from '../TodoHeader';

function AppUI() {
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
    } = React.useContext(TodoContext);
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
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
}

export { AppUI };
