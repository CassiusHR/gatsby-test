import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'


const Industria = (props) => {

    const { image,firstBlock,secondBlock } = useStaticQuery(graphql`
        query{
        image: file(relativePath:{eq: "banner2.jpg"}){
            sharp: childImageSharp{
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        firstBlock: file(relativePath:{eq: "Item_industria.jpg"}){
            sharp: childImageSharp{
                fixed(quality: 60, width: 500, height: 500) {
                    src
                }
            }
        }
        secondBlock: file(relativePath:{eq: "Contenido_industria_2.jpg"}){
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
            <title>Industria - Bee-Drone</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>

        <BannerLanding title="Industria" desc="Control - Registro - Inspección - Supervisión de Operaciones" imageSrc={image.sharp.fluid}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>Las nuevas tecnologías ofrecen al sector industrial innumerables posibilidades de desarrollo, siendo la automatización una de las vías principales para lograr sus objetivos. Los propósitos fundamentales son: incrementar la seguridad, aumentar la eficiencia, reducir los tiempos, y en consecuencia disminuir los costos.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={firstBlock.sharp.fixed.src} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <p>Los drones se están utilizando en diversas áreas, tales como la inspección de obras o supervisión de infraestructuras energéticas, donde a través de tomas aéreas se pueden identificar averías, para posteriormente repararlas y así prolongar la vida útil de la instalación, o el buen funcionamiento de la producción de energía.</p>
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
                            <p>Estas aeronaves se están usando también para evaluar, por ejemplo, el impacto de grandes obras, al facilitar la inspección del terreno desde el aire o la posibilidad de observar el avance de la misma. El objetivo es capturar fotografías y videos aéreos para así contar con información concreta sobre la evolución de la edificación, disminuir potenciales riesgos, y lograr llevar a cabo un seguimiento preciso de la faena.</p>
                        </div>
                    </div>
                </section>
                
            </section>
            <section id="one">
                <div className="inner" style={{textAlign:'center'}}>
                    <p>Hoy en día, numerosas empresas desarrollan sus proyectos con la ayuda de drones. El poder acortar el tiempo entre inspecciones, controlar lugares de difícil acceso, minimizar el riesgo de accidentes de los operarios, y optimizar los resultados en la cadena de producción, entre otros, transforma estas naves en una herramienta vital para la transformación en dirección a una industria más moderna e inteligente.</p>
                </div>
            </section>
        </div>
    </>
    )
}

export default Industria