import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'


const Comunicaciones = (props) => {

    const { image,firstBlock,secondBlock } = useStaticQuery(graphql`
        query{
        image: file(relativePath:{eq: "banner2.jpg"}){
            sharp: childImageSharp{
                fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        firstBlock: file(relativePath:{eq: "item_comunicaciones.jpg"}){
            sharp: childImageSharp{
                fixed(quality: 60, width: 500, height: 500) {
                    src
                }
            }
        }
        secondBlock: file(relativePath:{eq: "Contenido_comunicaciones_2.jpg"}){
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
            <title>Comunicaciones - Bee-Drone</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>

        <BannerLanding title="Comunicaciones" desc="Turismo - Promoción Inmobiliaria - Eventos - Publicidad" imageSrc={image.sharp.fluid}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>Los drones están en todas partes, desde la grabación de imágenes en vivo hasta el registro de matrimonios. Muy pocos contenidos audiovisuales están completos si no cuentan con imágenes aéreas. Estas aeronaves no tripuladas disponen de cámaras que ofrecen un potencial comercial ilimitado, capturando todo en alta resolución.</p>
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
                                <h3>Eventos y turismo</h3>
                            </header>
                            <p>Registrar un evento con drones trae consigo ventajas tales como contar con registros audiovisuales versátiles, detallados, consiguiendo planos elevados, alcanzando así nuevas perspectivas para el público. De esta forma, el espectador siente que vive el espectáculo de manera más realista, casi como si estuviera presente.</p>
                            <p>Esta tecnología también permite a las empresas de turismo elaborar videos excepcionales que con vistas panorámicas, provocan reacciones intensas en los espectadores, invitándolos a visitar las distintas localidades. Ya sea playa, montaña, lago, resort, o virtualmente cualquier paraje, los drones son la solución perfecta para mostrar en su totalidad el producto ofrecido, aportando así valor a servicios turísticos de toda índole.</p>
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
                                <h3>Promoción Inmobiliaria y Publicidad</h3>
                            </header>
                            <p>Los drones se han vuelto un medio superior para publicar propiedades y promoverlas en el mercado. Las agencias inmobiliarias se están dando cuenta que esta tecnología puede brindar imágenes de alta resolución desde la perspectiva de un pájaro, ilustrando en toda su magnitud el inmueble que se está ofreciendo. </p>
                            <p>En publicidad, se busca impactar de manera diferente e innovadora. Por lo que los drones se han vuelto una herramienta vital en el rubro. Las marcas están desarrollando acciones de comunicación que van más allá de anunciar sus productos, integrándolos así en la vida de sus consumidores, con la ayuda de producciones audiovisuales captadas desde una nueva perspectiva.</p>
                        </div>
                    </div>
                </section>
                
            </section>
        </div>
    </>
    )
}

export default Comunicaciones