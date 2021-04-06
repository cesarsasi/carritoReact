//Sin React
/*const element = document.createElement("h1"); // Se crea el elemento
element.innerText = "Mi nombre es César"; //Settear texto
const container = document.getElementById('root'); //Se crea variable que obriene la ID
container.appendChild(element); //Que vamos a mostrar*/

//Uso de variables en react
/*const name = "Choro Cesar";
const element = <h1>Mi nombre es {name} pero ahora con react!</h1>;
const container = document.getElementById('root');
ReactDOM.render(element,container);*/

//Uso de funciones 
/*const style = {
    color: "red"
}
function tictac(){
    const element = (
        <div>
            <h1 style ={style}> Reloj en React!</h1>
            <h2>Son las {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    const container = document.getElementById('root');
    ReactDOM.render(element,container);
}
setInterval(tictac,1000);*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


