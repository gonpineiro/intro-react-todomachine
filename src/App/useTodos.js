import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
    const { item: todos, saveItem: saveTodos, sincronize, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            completed: false,
        });

        saveTodos(newTodos);
    };

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);

        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;

        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);

        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);

        saveTodos(newTodos);
    };

    const states = {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        openModal,
    };

    const stateUpdaters = {
        setSearchValue,
        completeTodos,
        addTodo,
        deleteTodo,
        setOpenModal,
        sincronize,
    };

    return {
        states,
        stateUpdaters,
    };
}

export { useTodos };
