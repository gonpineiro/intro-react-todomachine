import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = ({ target: { value } }) => {
        setSearchValue(value);
    };

    return (
        <>
            <input className="TodoSearch" placeholder="Cebolla" onChange={onSearchValueChange} value={searchValue} />
            <p>{searchValue}</p>
        </>
    );
}

export { TodoSearch };
