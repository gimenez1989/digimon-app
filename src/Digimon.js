import React from 'react';
import './App.css';


const Digimon = (props) => {
    console.log('props.img :>> ', props.img);
    return (
        <div className="digiCard">
            <div className="nombre">{props.nombre}</div>
            <div className="nivel">Nivel: {props.nivel}</div>
            <img className="imagen" src={props.img} alt=""/>
        </div>
    )
    
}

export default Digimon;