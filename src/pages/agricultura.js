import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'


const Agricultura = (props) => {

    const { image,firstBlock,secondBlock } = useStaticQuery(graphql`
        query{
        image: file(relativePath:{eq: "banner2.jpg"}){
            sharp: childImageSharp{
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        firstBlock: file(relativePath:{eq: "item_agricultura.jpg"}){
            sharp: childImageSharp{
                fixed(quality: 60, width: 500, height: 500) {
                    src
                }
            }
        }
        secondBlock: file(relativePath:{eq: "Contenido_agricultura_2.jpg"}){
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
            <title>Agricultura - Bee-Drone</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>

        <BannerLanding title="Agricultura" desc="Registro - Inspección - Análisis - Subdivisión Predia" imageSrc={image.sharp.fluid}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>Recorrer el campo a pie o a caballo ha sido históricamente cómo agricultores y agrónomos han explorado sus cultivos. Es sabido que esta práctica requiere tiempo, trabajo y esfuerzo que podría ser utilizado en otras tareas, por lo que el uso de drones permite captar datos al instante, disminuyendo costos, desde una zona segura y cómoda, sin mayor esfuerzo para el agricultor.</p>
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
                            <p>Un drone puede inspeccionar cultivos periódicamente. Las imágenes generadas muestran cambios en la siembra a lo largo del tiempo, revelando así potenciales “puntos de conflicto”. Al identificar estos puntos, el agricultor tiene la posibilidad de mejorar el manejo y la producción de este.</p>
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
                            <p>La aplicación de esta tecnología es amplia. En ganadería, por ejemplo, se utiliza en numeración de especies, evaluación de la evolución de pastoreo rotativo, apreciación a priori del estado corporal del ganado, etc. En loteos, los drones se pueden emplear en tareas tales como generación de levantamientos fotogramétricos, deslindes y subdivisión de predios, entre otros.</p>
                        </div>
                    </div>
                </section>
                
            </section>
        </div>
    </>
    )
}

export default Agricultura