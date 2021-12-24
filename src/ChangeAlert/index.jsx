import React from 'react';
import './ChangeAlert.css';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
