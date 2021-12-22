import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

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
