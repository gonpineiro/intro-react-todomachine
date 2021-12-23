import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const { setSearchValue, searchValue } = React.useContext(TodoContext);

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
