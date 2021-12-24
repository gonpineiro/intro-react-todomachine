import React from 'react';
import './TodoSearch.css';

function TodoSearch({ setSearchValue, searchValue, loading }) {
    const onSearchValueChange = ({ target: { value } }) => {
        setSearchValue(value);
    };

    return <input className="TodoSearch" placeholder="Cebolla" onChange={onSearchValueChange} value={searchValue} disabled={loading} />;
}

export { TodoSearch };
