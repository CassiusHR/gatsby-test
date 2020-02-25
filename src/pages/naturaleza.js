import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'


const Naturaleza = (props) => {

    const { image,firstBlock,secondBlock } = useStaticQuery(graphql`
        query{
        image: file(relativePath:{eq: "banner2.jpg"}){
            sharp: childImageSharp{
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        firstBlock: file(relativePath:{eq: "Item_naturaleza.jpg"}){
            sharp: childImageSharp{
                fixed(quality: 60, width: 500, height: 500) {
                    src
                }
            }
        }
        secondBlock: file(relativePath:{eq: "Contenido_naturaleza_2.jpg"}){
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
            <title>Naturaleza - Bee-Drone</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>

        <BannerLanding title="Naturaleza" desc="Apreciación - Valoración - Cuidado" imageSrc={image.sharp.fluid}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>La Naturaleza brinda el delicado equilibrio que mantiene la vida en el Planeta Tierra. La naturaleza garantiza que la vida pueda coexistir en los desiertos más áridos y en las selvas tropicales más frondosas y fértiles. Pero a medida que la huella humana crece, este equilibrio se vuelve cada vez más delicado. Es por esto, que es de vital importancia que como seres habitantes de este planeta azul, hagamos lo que corresponde para evitar que el daño siga avanzando, promoviendo el cuidado del medio ambiente.</p>
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
                            <p>Esta manera de pensar se ha tornado uno de los principales ejes de innumerables campañas de conservación. Se basa en el principio de que si queremos proteger algo, debemos conocerlo, estudiarlo, y enseñarlo, para así poder apreciarlo, amarlo, y sentirlo. ¿Cómo valorar algo si no lo vemos?</p>
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
                            <p>Las áreas protegidas son de vital importancia para la conservación de la biodiversidad en un mundo con clima cambiante. La relación entre los bosques y el cambio climático es estrecha. En una primera línea, tenemos que los bosques mitigan el calentamiento climático absorbiendo carbono, mientras que estos mismos, al ser quemados o destruidos, contribuyen al calentamiento del planeta.</p>
                            <p>Las áreas silvestres protegidas ayudan a conservar los ecosistemas que proveen hábitat, refugio, alimentos, materias primas, barrera contra desastres, fuente de recursos, entre otros, y por lo tanto pueden tener un papel fundamental en ayudar a las distintas especies, a las personas, y a los países, a adaptarse al cambio climático. Debido a su estado de protección, estos bosques deberían permanecer libres de intervención humana.</p>
                        </div>
                    </div>
                </section>
                
            </section>
        </div>
    </>
    )
}

export default Naturaleza