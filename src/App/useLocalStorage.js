import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
    const { sincronizedItem, error, loading, item } = state;

    /* Actions Creators */
    const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
    const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem });
    const onSave = (newTodos) => dispatch({ type: actionTypes.save, payload: newTodos });
    const onSincronize = () => dispatch({ type: actionTypes.sincronize });

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                onSuccess(parsedItem);
            } catch (error) {
                onError(error);
            }
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sincronizedItem]);

    const saveItem = (newTodos) => {
        try {
            const stringifiedItem = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifiedItem);
            onSave(newTodos);
        } catch (error) {
            onError(error);
        }
    };

    const sincronize = () => {
        onSincronize();
    };

    return { item, saveItem, loading, error, sincronize };
}

/* useReducer */
const initialState = ({ initialValue }) => ({
    sincronizedItem: true,
    error: false,
    loading: true,
    item: initialValue,
});

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
    },
    [actionTypes.success]: {
        ...state,
        error: false,
        loading: false,
        sincronizedItem: true,
        item: payload,
    },
    [actionTypes.save]: {
        ...state,
        item: payload,
    },
    [actionTypes.sincronize]: {
        ...state,
        loading: true,
        sincronizedItem: false,
    },
});

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;

export { useLocalStorage };
