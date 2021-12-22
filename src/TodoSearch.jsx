import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const onSearchValueChange = ({ target: { value } }) => {
        console.log(value);
    };

    return <input className="TodoSearch" placeholder="Cebolla" onChange={onSearchValueChange} />;
}

export { TodoSearch };
