import React from 'react';
import './ChangeAlert.css';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Hubo Cambios, desea cargar la información?</p>
                    <button className="TodoForm-button TodoForm-button--add" onClick={toggleShow}>
                        ¡SI!
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert };
