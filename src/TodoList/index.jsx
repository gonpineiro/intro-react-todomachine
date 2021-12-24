import React from 'react';
import './TodoList.css';

function TodoList({
    error,
    onError,
    loading,
    totalTodos,
    searchValue,
    onLoading,
    searchedTodos,
    onEmptyTodos,
    render,
    onEmptySearchResults,
    children,
}) {
    const renderFun = children || render;

    return (
        <section className="TodoList-container">
            {error && onError()}
            {loading && onLoading()}

            {!loading && !totalTodos && onEmptyTodos()}
            {!!totalTodos && !searchedTodos.length && onEmptySearchResults(searchValue)}

            {!loading && !error && searchedTodos.map(renderFun)}
        </section>
    );
}

export { TodoList };
