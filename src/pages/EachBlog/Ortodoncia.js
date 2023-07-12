import React from 'react'
import mordermal from '../../assets/images/mordermal.png';
import mordidacruzada from '../../assets/images/mordidacruzada.png';
import mordidaabierta from '../../assets/images/mordidaabierta.png';
import './EachBlog.css';

const Ortodoncia = () => {
    return (
        <>
            <div className="container">
                <section className="articles">
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
                                    <h3 className="has-text-centered">ORTODONCIA</h3>
                                    <div className='flow-root'>
                                        <img src={mordermal} alt="Morder Mal"/>
                                        <h5>¿Qué es morder mal?</h5>
                                        <p>En una mordida armónica o "ideal", los dientes superiores están levemente por delante y cubren los bordes de los inferiores</p>
                                    </div>
                                    <hr />
                                    <div className='flow-root'>
                                        <img src={mordidacruzada} alt="Mordida Cruzada"/>
                                        <h5>Mordida Cruzada</h5>
                                        <p>Es similar a querer poner la tapa
                                            a una caja demasiado larga o
                                            angosta, por más que intentes un
                                            lado de la tapa siempre queda
                                            por dentro de la caja.</p>
                                    </div>
                                    <hr />
                                    <div className='flow-root'>
                                        <img src={mordidaabierta} alt="Mordida Abierta"/>
                                        <h5>Mordida Abierta</h5>
                                        <p>La succión digital hace que los dientes superiores se corran hacia fuera y los incisivos inferiores hacia atrás.La respiración bucal y la mala ubicación de la lengua hace que los incisivos superiores e inferiores vayan hacia delante. Estas son todas causas de mordida abierta y tambien por problemas de crecimiento.</p>
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

export default Ortodoncia