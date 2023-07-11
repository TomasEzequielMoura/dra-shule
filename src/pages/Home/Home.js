import React from 'react';
import './Home.css';
import '../General.css';

const Home = () => {
  return (
    <>
      <div className="bg">
        <div className='center full-size flex-dir-col padding-sides'>
            <h1 className="title">¡Bienvenido!</h1>
            <h2 className="subtitle">¡Sonreí con confianza! Programa tus turnos de manera rápida y sencilla.</h2>
            <a class="btn-epic" href="https://wiri.la/equipos/cardioalem" target="_blank">
              <div>
                <span>Solicite su turno</span>
                <span>Solicite su turno</span>
              </div>
            </a>
        </div>
      </div>
    </>
  )
}

export default Home;