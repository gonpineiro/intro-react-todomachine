import React from 'react';

function withStorageListener(WrappedComponent) {
    return function WrapedComponentWithStorageListener({ sincronize }) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            sincronize();
            setStorageChange(false);
        };

        return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
    };
}

export { withStorageListener };
