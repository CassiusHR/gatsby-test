import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'



const Boxes = ()=>{
  const { image1,image2,image3,image4,image5,image6 } = useStaticQuery(graphql`
    query{
      image1: file(relativePath:{eq: "item_agricultura.jpg"}){
        sharp: childImageSharp{
            fluid(quality: 60) {
                src
            }
        }
      }
      image2: file(relativePath:{eq: "item_educacion.jpg"}){
        sharp: childImageSharp{
            fluid(quality: 60) {
                src
            }
        }
      }
      image3: file(relativePath:{eq: "Item_industria.jpg"}){
        sharp: childImageSharp{
            fluid(quality: 60) {
                src
            }
        }
      }
      image4: file(relativePath:{eq: "item_comunicaciones.jpg"}){
        sharp: childImageSharp{
            fluid(quality: 60) {
                src
            }
        }
      }
      image5: file(relativePath:{eq: "Item_investigacion.jpg"}){
        sharp: childImageSharp{
            fluid(quality: 60) {
                src
            }
        }
      }
      image6: file(relativePath:{eq: "Item_naturaleza.jpg"}){
        sharp: childImageSharp{
            fluid(quality: 60) {
                src
            }
        }
      }
    }
  `)
    return(
      <div id="main">
        <section id="one" className="tiles">
          <article style={{backgroundImage: `url(${image1.sharp.fluid.src})`}}>
              <header className="major">
                  <h3>Agricultura</h3>
                  <p>Registro - Inspección - Análisis - Subdivisión predial</p>
              </header>
              <Link to="/agricultura" className="link primary"></Link>
          </article>
          <article style={{backgroundImage: `url(${image2.sharp.fluid.src})`}}>
              <header className="major">
                  <h3>Escuela</h3>
                  <p>Talleres - Capacitaciones - Asesorías</p>
              </header>
              <Link to="/escuela" className="link primary"></Link>
          </article>
          <article style={{backgroundImage: `url(${image3.sharp.fluid.src})`}}>
              <header className="major">
                  <h3>Industria</h3>
                  <p>Control - Registro - Inspección - Supervisión de operaciones</p>
              </header>
              <Link to="/industria" className="link primary"></Link>
          </article>
          <article style={{backgroundImage: `url(${image4.sharp.fluid.src})`}}>
              <header className="major">
                  <h3>Comunicaciones</h3>
                  <p>Turismo - Promoción Inmobiliaria - Eventos - Publicidad</p>
              </header>
              <Link to="/comunicaciones" className="link primary"></Link>
          </article>
            <article style={{backgroundImage: `url(${image5.sharp.fluid.src})`}}>
                <header className="major">
                    <h3>Investigación</h3>
                    <p>Supervisión - Prevención - Monitoreo</p>
                </header>
                <Link to="/investigacion" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${image6.sharp.fluid.src})`}}>
                <header className="major">
                    <h3>Naturaleza</h3>
                    <p>Apreciación - Valoración - Cuidado</p>
                </header>
                <Link to="/naturaleza" className="link primary"></Link>
            </article>
        </section>
        <section id="two">
            <div className="inner">
                <p>En Bee Drone entregamos un servicio personalizado, con el fin de generar un producto con identidad propia, atractivo y que responda totalmente a las expectativas e intereses de nuestros asociados.</p>
                <p>Nos interesa fomentar la educación, la apreciación y el valor de la naturaleza, colaborando con el cuidado y el respeto por el medio ambiente y los ecosistemas que lo componen.</p>
                <p>Nuestros operadores y procedimientos están acreditados por la DGAC.</p>
                <ul className="actions">
                    <li><Link to="/landing" className="button next">NUESTROS PROYECTOS</Link></li>
                </ul>
            </div>
        </section>
      </div>
    )
}

export default Boxes