import React from 'react'
import './Blog.css';
import ortodoncia from '../../assets/images/ortodoncia.png';
import alineadores from '../../assets/images/alineadores.png';
import limpieza from '../../assets/images/limpieza.png';

const Blog = () => {
  return (
    <>
      <body className='bg' style={{ height: 'auto' }}>
        <div className="container-blog container-simil-bootstrap">
          <div className="card">
            <div className="img-box">
              <img src={alineadores} alt="alineadores"/>
            </div>
            <div className="content">
              <div>
                <h2>ALINEADORES INVISIBLES</h2>
                <p>
                  Los alineadores invisibles son férulas de ortodoncia que, a diferencia de los sistemas
                  tradicionales, son casi imperceptibles, cómodos y no requieren del cementado de bráquets
                  ni otros aparatos ortopédicos.
                </p>
              </div>
              <div className="btn-one">
                <a target="_blank" href="/blog/alineadores">
                  <span>¡Leer más!</span>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-box">
              <img src={limpieza} alt="limpieza"/>
            </div>
            <div className="content">
              <div>
                <h2>¿CÓMO LIMPIARTE?</h2>
                <p>
                  Aprende a cepillarte correctamente, utiliza el hilo dental y enjuague bucal para una limpieza completa. Descubri la mejor forma de mantener tus dientes limpios y saludables.
                </p>
              </div>
              <div className="btn-one">
                <a target="_blank" href="/blog/limpieza">
                  <span>¡Leer más!</span>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-box">
              <img src={ortodoncia} alt="ortodoncia"/>
            </div>
            <div className="content">
              <div>
                <h2>ORTODONCIA</h2>
                <p>
                  Conseguí la sonrisa perfecta con nuestra ortodoncia. Corregimos problemas dentales y faciales para alinear tus dientes y mejorar tu bienestar bucal.
                </p>
              </div>
              <div className="btn-one">
                <a target="_blank" href="/blog/ortodoncia">
                  <span>¡Leer más!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>

  )
}

export default Blog