import React from 'react';
import ReactDOM from 'react-dom';
/* import App from './App'; */
import './index.css';

function App(props) {
    return (
        <h1>
            {props.saludo}, {props.nombre}
        </h1>
    );
}

function withSaludo(WrappedComponent) {
    return function WrappedComponentWithSaludo(saludo){
        return function ComponenteDeVerdad(props) {
            return (
                <>
                    <WrappedComponent {...props} saludo={saludo}/>
                    <p>Estamos acompañando al WrappedComponent</p>
                </>
            );
        };
    }
}

const AppWithSaludo = withSaludo(App)('wenitas');

ReactDOM.render(<AppWithSaludo nombre="Gonzalo" />, document.getElementById('root'));
