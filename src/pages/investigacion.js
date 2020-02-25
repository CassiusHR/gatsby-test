import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'


const Investigacion = (props) => {

    const { image,firstBlock,secondBlock } = useStaticQuery(graphql`
        query{
        image: file(relativePath:{eq: "banner2.jpg"}){
            sharp: childImageSharp{
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        firstBlock: file(relativePath:{eq: "Item_investigacion.jpg"}){
            sharp: childImageSharp{
                fixed(quality: 60, width: 500, height: 500) {
                    src
                }
            }
        }
        secondBlock: file(relativePath:{eq: "Contenido_naturaleza_3.jpg"}){
            sharp: childImageSharp{
                fixed(quality: 60, width: 500, height: 500) {
                    src
                }
            }
        }
        }
    `)

    return(
    <>
        <Helmet>
            <title>Investigación - Bee-Drone</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>

        <BannerLanding title="Investigación" desc="Supervisión - Prevención - Monitoreo" imageSrc={image.sharp.fluid}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>En disciplinas científicas, el método tradicional de investigación, en función de la naturaleza del tema, ha sido visitar el campo para la realización de cartografías, muestreos, censos de diverso tipo, levantamientos de vegetación, etc. Esta metodología se seguirá utilizando, pero ahora se cuenta con herramientas tecnológicas que facilitan el trabajo, y cortan los tiempos y costos asociados al estudio.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={firstBlock.sharp.fixed.src} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            {/* <header className="major">
                                <h3>Drones en la Escuela</h3>
                            </header> */}
                            <p>Los drones se han vuelto una herramienta novedosa para muchos campos de investigación, ya sea en geología, biología, medio ambiente, biología marina, entre otros. Estos permiten captar registros audiovisuales de alta resolución, en zonas donde muchas veces es prácticamente imposible acceder a ellas a pie.</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={secondBlock.sharp.fixed.src} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            {/* <header className="major">
                                <h3>Drones en la Universidad</h3>
                            </header> */}
                            <p>Los UAV (Unmanned Aerial Vehicle) están siendo empleados en universidades de todo el mundo, en estudios de monitoreo de especies silvestres, estudios de clima, mapeo y exploración de terrenos o vestigios arqueológicos, entre otros; con aplicaciones como el pronóstico de incendios forestales, por medio del establecimiento de zonas de conservación, minimización de daños materiales y riesgos humanos, logrando así la construcción de sistemas de alertas tempranas para estas catástrofes.</p>
                        </div>
                    </div>
                </section>
                
            </section>
        </div>
    </>
    )
}

export default Investigacion