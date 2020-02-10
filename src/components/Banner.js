import React from 'react'
import styled from 'styled-components'

const HeaderElement = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  position:relative;
  margin-bottom:20px;
  
  h1{
      position:relative;
      margin:0px;
      padding:0px 10px;

      &:before{
      content:'';
      position:absolute;
      width:100%;
      height:4px;
      background:white;
      top:0px;
      left:0px;
      }
      &:after{
          content:'';
          position:absolute;
          width:100%;
          height:4px;
          background:white;
          bottom:0px;
          left:0px;
      }
  }
`
const Content = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  position:relative;
  margin-bottom:20px;
  p{
    text-align:center;
  }
`

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <HeaderElement>
                <h1>Bee-Drone</h1>
            </HeaderElement>
            <Content>
                <p>TEXTO PULENTO DE RELLENO</p>
            </Content>
        </div>
    </section>
)

export default Banner
