import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width:100%;
  min-height:600px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  h1{
    font-size:30px;
  }
  p{
    margin-top:10px;
    span{
      font-weight:600;
    }
  }
`

const Construction = () => {
  return (
    <Container>
      <h1>SITIO BAJO DESARROLLO</h1>
      <a href="mailto:adiaz@bee-drone.cl">adiaz@bee-drone.cl</a>
      <a href="mailto:contacto@bee-drone.cl">contacto@bee-drone.cl</a>
      <p>Cel <span>+56 9 82602016</span></p>
    </Container>
  )
}
export default Construction
