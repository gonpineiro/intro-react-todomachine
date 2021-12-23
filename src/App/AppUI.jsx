import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({loading, error, completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodos, deleteTodo }) {
    return (
        <React.Fragment>
            <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <TodoList>
                {error && <p>Hubo un error</p>}
                {loading && <p>Estamos cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO...</p>}

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

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };
