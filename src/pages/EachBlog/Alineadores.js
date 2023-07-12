import React from 'react'
import alineadores from '../../assets/images/alineadores.png';
import './EachBlog.css';

const Alineadores = () => {
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
                                    <h3 className="has-text-centered">ALINEADORES INVISIBLES</h3>
                                    <img src={alineadores} alt="alineadores"/>

                                    <p>Los alineadores invisibles son férulas de ortodoncia que, a diferencia de los sistemas
                                        tradicionales, son casi imperceptibles, cómodos y no requieren del cementado de bráquets
                                        ni otros aparatos ortopédicos. Con esta metodología, los pacientes reciben un número
                                        determinado de alineadores de plástico que son removibles, transparentes y hechos a la
                                        medida de su boca. Son muy fáciles de utilizar. Para colocarlos se deben ajustar sobre los
                                        dientes aplicando un poco de presión con los dedos para adaptarlos correctamente.
                                        Tienen varios beneficios en comparación con los aparatos tradicionales. Por un lado, son
                                        prácticamente invisibles, la mayoría de las personas no se darán cuenta de que los llevas
                                        puestos.</p>
                                    <p> Y son removibles, por tanto, te los podes quitar para comer, beber, cepillarte los dientes,
                                        usar hilo dental,o para ocasiones especiales. Ayudan a prevenir con mayor eficacia la caries
                                        dental.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Alineadores