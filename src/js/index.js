//import react into the bundle
import React from 'react';
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let numero = 0;
let unidades = 0;
let decenas = 0;
let centenas = 0;
let millares = 0;
let decenasMil = 0;
let centenasMillar = 0;

function separarEnDigitos(){
    let numString = numero.toString().split("").reverse();
    unidades = numString[0];
    if (numString[1]){
        decenas = numString[1];
    }else{
            decenas = 0;
    }
    if (numString[2]){
        centenas = numString[2];
    }else{
            centenas = 0;
    }
    if (numString[3]){
        millares = numString[3];
    }else{
            millares = 0;
    }
    if (numString[4]){
        decenasMil = numString[4];
    }else{
            decenasMil = 0;
    }
    if (numString[5]){
        centenasMillar = numString[5];
    }else{
            centenasMillar = 0;
    }
    

}

function incrementar(){
    separarEnDigitos();
    ReactDOM.createRoot(document.getElementById('app')).render(<Home numero={[unidades,decenas,centenas,millares,decenasMil,centenasMillar]}/>);
    numero = numero + 1;

}


setInterval(() => {
incrementar()
}, 1000);


//render your react application
