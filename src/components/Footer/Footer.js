import React from 'react'
import { GrGatsbyjs } from 'react-icons/gr';
import styled from 'styled-components';


const FooterWrapper = styled.footer`
     position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row ;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  `;

const FooterText = styled.p`
  font-size: 1em;
  font-weight: 300;
  `;

 const GatsbyIcon = styled(GrGatsbyjs)`
    height: 20px;
    width: 20px;
    padding-left: 5px;
 `;

const Footer = () => {

    return (
        <FooterWrapper>
            <FooterText>This site was created using Gatsby
            </FooterText>
            <GatsbyIcon />
        </FooterWrapper>


    )
}

export default Footer;

