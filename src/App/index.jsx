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
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

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
        sincronize,
    } = useTodos();

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
                <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                searchValue={searchValue}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={(searchText) => <p>no hay resultados para {searchText}</p>}
                render={(todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            >
                {(todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />

            <ChangeAlertWithStorageListener sincronize={sincronize} />
        </React.Fragment>
    );
}

export default App;
