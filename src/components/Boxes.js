import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'



const Boxes = ()=>{
  const {allFile:{images}} = useStaticQuery(graphql`
    query{
      allFile{
        images: nodes{
          childImageSharp{
            fluid(maxWidth: 800) {
              src
            }
          }
        }
      }
    }
  `)
    return(
      <div id="main">
        {console.log(images)}
        <section id="one" className="tiles">
          <article style={{backgroundImage: `url(${images[2].childImageSharp.fluid.src})`}}>
              <header className="major">
                  <h3>Agricultura</h3>
                  <p>Registro - Inspección - Análisis - Subdivisión predial</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
          </article>
          <article style={{backgroundImage: `url(${images[1].childImageSharp.fluid.src})`}}>
              <header className="major">
                  <h3>Escuela</h3>
                  <p>Talleres - Capacitaciones - Asesorías</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
          </article>
          <article style={{backgroundImage: `url(${images[3].childImageSharp.fluid.src})`}}>
              <header className="major">
                  <h3>Industria</h3>
                  <p>Control - Registro - Inspección - Supervisión de operaciones</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
          </article>
          <article style={{backgroundImage: `url(${images[5].childImageSharp.fluid.src})`}}>
              <header className="major">
                  <h3>Comunicaciones</h3>
                  <p>Turismo - Promoción Inmobiliaria - Eventos - Publicidad</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
          </article>
            <article style={{backgroundImage: `url(${images[4].childImageSharp.fluid.src})`}}>
                <header className="major">
                    <h3>Investigación</h3>
                    <p>Supervisión - Prevención - Monitoreo</p>
                </header>
                <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${images[6].childImageSharp.fluid.src})`}}>
                <header className="major">
                    <h3>Naturaleza</h3>
                    <p>Apreciación - Valoración - Cuidado</p>
                </header>
                <Link to="/landing" className="link primary"></Link>
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