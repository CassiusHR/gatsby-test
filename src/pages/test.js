import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Construction from '../components/Construction'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const isConstructing = false;

class Test extends React.Component {
    
    render() {
        if (!isConstructing) {
            return (
                <Layout>
                    <Helmet
                        title="Bee-Drone"
                        meta={[
                            { name: 'description', content: 'Sample' },
                            { name: 'keywords', content: 'sample, something' },
                        ]}
                    >
                    </Helmet>
    
                    <Banner />
    
                    <div id="main">
                        <section id="one" className="tiles">
                            <article style={{backgroundImage: `url(${pic01})`}}>
                                <header className="major">
                                    <h3>Escuela</h3>
                                    <p>Talleres - Capacitaciones - Asesorías</p>
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic02})`}}>
                                <header className="major">
                                    <h3>Agricultura</h3>
                                    <p>Registro - Inspección - Análisis - Subdivisión predial</p>
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic03})`}}>
                                <header className="major">
                                    <h3>Comunicaciones</h3>
                                    <p>Turismo - Promoción Inmobiliaria - Eventos - Publicidad</p>
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic04})`}}>
                                <header className="major">
                                    <h3>Industria</h3>
                                    <p>Control - Registro - Inspección - Supervisión de operaciones</p>
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic05})`}}>
                                <header className="major">
                                    <h3>Investigación</h3>
                                    <p>Supervisión - Prevención - Monitoreo</p>
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic06})`}}>
                                <header className="major">
                                    <h3>Naturaleza</h3>
                                    <p>Apreciación - Valoración - Cuidado</p>
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                        </section>
                        <section id="two">
                            <div className="inner">
                                <header className="major">
                                    <h2>Massa libero</h2>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                                <ul className="actions">
                                    <li><Link to="/landing" className="button next">Get Started</Link></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </Layout>
            )
        }
        else {
            return(
                <>
                    <Construction/>
                </>
            )
        }
    }
}

export default Test