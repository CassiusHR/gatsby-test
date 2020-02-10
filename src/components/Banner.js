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
      height:2px;
      background:white;
      top:0px;
      left:0px;
      transform:scaleX(0);
      transform-origin:left;
      animation:bars;
      animation-duration: 1s;
      animation-delay:0.6s;
      animation-timing-function:ease;
      animation-fill-mode:forwards;
      }
      &:after{
        content:'';
        position:absolute;
        width:100%;
        height:2px;
        background:white;
        bottom:0px;
        left:0px;
        transform:scaleX(0);
        transform-origin:right;
        animation:bars;
        animation-duration: 1s;
        animation-delay:0.6s;
        animation-timing-function:ease;
        animation-fill-mode:forwards;
      }
  }
  @keyframes bars {
      0%{transform:scaleX(0)}
      100%{transform:scaleX(1)}
  }
  @keyframes text {
    0%{transform:translateY(20%);opacity:0;}
    100%{transform:translateY(0%);opacity:1;}
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
    animation:text;
    opacity:0;
    animation-duration: 1.5s;
    animation-delay:1s;
    animation-timing-function:ease;
    animation-fill-mode:forwards;
  }
`

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <HeaderElement>
                <h1>BEE-DRONE</h1>
            </HeaderElement>
            <Content>
                <p>TEXTO PULENTO DE RELLENO</p>
            </Content>
        </div>
    </section>
)

export default Banner
