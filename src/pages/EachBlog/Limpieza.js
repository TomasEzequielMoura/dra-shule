import React from 'react'
import paso1 from '../../assets/images/paso1.png';
import paso2 from '../../assets/images/paso2.png';
import paso3 from '../../assets/images/paso3.png';
import paso4 from '../../assets/images/paso4.png';
import paso7 from '../../assets/images/paso7.png';
import paso9 from '../../assets/images/paso9.png';
import './EachBlog.css';

const Limpieza = () => {
    return (
        <>
            <div className="container">
                <section className="articles limpieza">
                    <div className="column is-8 is-offset-2">
                        <div className="card article">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content has-text-centered">
                                        <div className="tags has-addons level-item">
                                            <span className="tag is-rounded is-info">@veroshule</span>
                                            <span className="tag is-rounded">Junio 12, 2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content article-body">
                                    <h3 className="has-text-centered">¿CÓMO DEBES LIMPIARTE LOS DIENTES?</h3>
                                    <div className='flow-root'>
                                        <img src={paso1} alt="Paso 1: Limpieza de dientes"/>
                                        <p>1. Enjuaga minuciosamente tu boca con agua tibia. Luego coloca una porción de pasta de dientes de aproximadamente un centímetro sobre el cepillo de dientes.</p>
                                    </div>
                                    <hr />
                                    <div className='flow-root'>
                                        <img src={paso2} alt="Paso 2: Limpieza de dientes"/>
                                        <p>2. Primero cepilla hacia adelante la zona de los dientes con los que masticas, en la parte superior.</p>
                                    </div>
                                    <hr />
                                    <div className='flow-root'>
                                        <img src={paso3} alt="Paso 3: Limpieza de dientes"/>
                                        <p>3. Luego cepilla de la misma manera la zona de los dientes con la que masticas pero de la parte inferior.</p>
                                    </div>
                                    <hr />
                                    <div className='flow-root'>
                                        <img src={paso4} alt="Paso 4: Limpieza de dientes"/>
                                        <p>4. Junta los dientes y limpia la superficie de todos los dientes de la derecha. Comienza con la superficie externa de las muelas de la derecha y cepilla en pequeños movimientos adelante y hacia el medio.</p>
                                    </div>
                                    <hr />
                                    <div className='flow-root'>
                                        <p>5. Ahora las partes exteriores de todos los dientes de la izquierda. Cambia la posición del cepillo de dientes y continúa cepillando con movimientos pequeños hasta las caras exteriores de las muelas de la izquierda.</p>
                                    </div>
                                    <hr />
                                    <div className='flow-root'>
                                        <p>6. Ahora les toca a las caras internas de todos los dientes de arriba. ¡Abre bien la boca y cepilla cada uno de los dientes de arriba con pequeños movimientos circulares!</p>
                                    </div>
                                    <hr />
                                    <div className='flow-root'>
                                        <img src={paso7} alt="Paso 7: Limpieza de dientes"/>
                                        <p>7. De la misma manera cepilla la cara interna de todos los dientes de abajo. También tu lengua, pues allí también hay bacterias.</p>
                                    </div>
                                    <hr />
                                    <div className='flow-root'>
                                        <p>8. Por último, te enjuagas la boca otra vez, minuciosamente, con agua tibia. Limpia tu cepillo de dientes bajo un chorro de agua y ponlo en el vaso para lavar los dientes, con la parte del cepillo hacia arriba.</p>
                                    </div>
                                    <hr />
                                    <div className='flow-root'>
                                        <img src={paso9} alt="Paso 9: Limpieza de dientes"/>
                                        <p>9. ¡Ahora tus dientes resplandecen!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Limpieza