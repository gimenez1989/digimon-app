import React from 'react';
import Digimon from './Digimon';
import './App.css';

function App() {
  const listaDigimon = [
    {
      name: "Agumon",
      img: "https://digimon.shadowsmith.com/img/agumon.jpg",
      level: "Rookie"
    },
    {
      name: "Gabumon",
      img: "https://digimon.shadowsmith.com/img/gabumon.jpg",
      level: "Rookie"
    },
    {
      name: "Biyomon",
      img: "https://digimon.shadowsmith.com/img/biyomon.jpg",
      level: "Rookie"
    },
    {
      name: "Tentomon",
      img: "https://digimon.shadowsmith.com/img/tentomon.jpg",
      level: "Rookie"
    },
    {
      name: "Palmon",
      img: "https://digimon.shadowsmith.com/img/palmon.jpg",
      level: "Rookie"
    },
    {
      name: "Gomamon",
      img: "https://digimon.shadowsmith.com/img/gomamon.jpg",
      level: "Rookie"
    },
    {
      name: "Patamon",
      img: "https://digimon.shadowsmith.com/img/patamon.jpg",
      level: "Rookie"
    }
]

  return (
    <div className="App">
      {
       listaDigimon.map((e) => 
       <Digimon 
          nombre={e.name}
          nivel={e.level}
          img={e.img}
       />)
      }
    </div>
  );
}

export default App;
