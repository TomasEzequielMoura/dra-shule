import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="bg">
        <div className="container-simil-bootstrap full-size">
          <div
            className="center  flex-dir-col padding-sides full-size"
            style={{ paddingBottom: "6rem" }}
          >
            <h1 className="title">¡Bienvenido!</h1>
            <h2 className="subtitle">
              ¡Sonreí con confianza! Programa tus turnos de manera rápida y
              sencilla.
            </h2>
            <a
              className="btn-epic"
              href="https://cardioalem.drapp.com.ar"
              target="_blank"
            >
              <div>
                <span>Solicite su turno</span>
                <span>Solicite su turno</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
