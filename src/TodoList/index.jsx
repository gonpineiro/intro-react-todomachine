import React from 'react';
import './TodoList.css';

function TodoList({ error, onError, loading, onLoading, searchedTodos, onEmptyTodos, render }) {
    return (
        <section className="TodoList-container">
            {error && onError()}
            {loading && onLoading()}

            {!loading && !searchedTodos?.length && onEmptyTodos()}

            {searchedTodos.map(render)}
        </section>
    );
}

export { TodoList };
