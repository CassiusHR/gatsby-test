import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const HeaderContainer = styled(BackgroundImage)`
    position:relative;
    .overlay{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        left:0px;
        top:0%;
        background: linear-gradient(0deg, rgba(0,0,0,0.7567401960784313) 0%, rgba(0,0,0,0.5) 42%, rgba(0,0,0,0) 88%);
        transition:opacity 0.5s ease;
    }
`

const BannerLanding = ({title,desc,imageSrc}) => {

    return(
    <HeaderContainer id="banner" className="style2" tag="section" fluid={imageSrc} fadeIn="soft">
        <div className="overlay"></div>
        <div className="inner">
            <header className="major">
                <h1>{title}</h1>
            </header>
            <div className="content">
            <p>{desc}</p>
            </div>
        </div>
    </HeaderContainer>
    )
}

export default BannerLanding
