import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../layouts'
import BannerLanding from '../components/BannerLanding'


const Escuela = (props) => {

    const { image,firstBlock,secondBlock } = useStaticQuery(graphql`
        query{
        image: file(relativePath:{eq: "banner2.jpg"}){
            sharp: childImageSharp{
            fluid(quality: 100){
                ...GatsbyImageSharpFluid
            }
            }
        }
        firstBlock: file(relativePath:{eq: "Contenido_educacion.jpg"}){
            sharp: childImageSharp{
                fixed(quality: 60, width: 500, height: 500) {
                    src
                    }
            }
        }
        secondBlock: file(relativePath:{eq: "item_educacion.jpg"}){
            sharp: childImageSharp{
                fixed(quality: 60, width: 500, height: 500) {
                    src
                    }
            }
        }
        }
    `)

    return(
    <Layout>
        <Helmet>
            <title>Escuela - Bee-Drone</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>

        <BannerLanding title="Escuela" desc="Talleres - Capacitaciones - Asesorías" imageSrc={image.sharp.fluid}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>La introducción de drones en la sala de clases, puede contribuir a desarrollar las aptitudes de los estudiantes en ámbitos tan amplios como su orientación y habilidades motoras, ayudarlos a construir una comprensión más amplia del mundo que los rodea, enriquecer su imaginación, y despertar su curiosidad de maneras que beneficien, incluso, temas de aprendizaje que podrían parecer no relacionados con esta tecnología y sus posibilidades. La versatilidad de los drones permite utilizarlos en los distintos niveles educativos y aplicarse en diferentes materias y planes de estudio.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={firstBlock.sharp.fixed.src} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Drones en la Escuela</h3>
                            </header>
                            <p>Existen maneras creativas de utilizar drones para enseñar. Por ejemplo, construyendo modelos a escala de células y luego hacer tomas desde arriba para mostrar las partes individuales y la estructura general. En clases de lenguaje el uso de estas naves puede ser fuente de inspiración para ejercicios de expresión escrita; o en materias tan abstractas como matemáticas y física, los estudiantes pueden aplicar conocimientos, por ejemplo, ilustrando el recorrido del drone y creando gráficos con la distancia, tiempo y la influencia de las condiciones meteorológicas. Las opciones son abundantes, y aportan entretención a las clases.</p>
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
                            <header className="major">
                                <h3>Drones en la Universidad</h3>
                            </header>
                            <p>Estudiantes de diversos campos de estudio, como ingeniería, periodismo, arqueología, etc, han comenzado a ser usuarios de drones para así enriquecer su formación profesional.</p>
                            <p>Estudiantes de arquitectura están utilizando drones para inspeccionar fachadas de edificios y así enriquecer sus conocimientos en técnicas de construcción y estructuras. Alumnos de biología y botánica se están viendo beneficiados por la utilización de estas aeronaves, ya que están logrando alcanzar flora y fauna que se encuentra en lugares de difícil acceso. En facultades de agronomía están siendo utilizados para realizar estudios sobre sequías, uso de fertilizantes, etc, permitiendo a los estudiantes examinar grandes porciones de campo y observar cómo reaccionan a diferentes condiciones, al sobrevolar las plantaciones desde las alturas. Además, estudiantes de ingeniería y aeronáutica, se ven beneficiados por estos aparatos, ya que les permiten probar, a bajos costos, conceptos con ambientes y condiciones reales.</p>
                        </div>
                    </div>
                </section>
                
            </section>
            <section id="one">
                <div className="inner" style={{textAlign:'center'}}>
                    <p>La tecnología está progresivamente cubriendo cada aspecto de la vida humana, y la educación no es una excepción. Al incorporar drones, se aportan nuevas perspectivas, se motiva a los estudiantes, y se le da un buen uso a su curiosidad innata.</p>
                </div>
            </section>
        </div>
    </Layout>
    )
}

export default Escuela