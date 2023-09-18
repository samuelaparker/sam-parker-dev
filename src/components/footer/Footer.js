import * as React from 'react'
import { GrGatsbyjs } from 'react-icons/gr';
import styled from 'styled-components';

const Footer = () => {

  return (
    <FooterWrapper>
      <FooterText><GatsbyIcon />  This site was created using Gatsby
      </FooterText>

    </FooterWrapper>
  )
}

export default Footer;

// #page-container {
//   position: relative;
//   min-height: 100vh;
// }

// #content-wrap {
//   padding-bottom: 2.5rem;    /* Footer height */
// }

// #footer {
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 2.5rem;            /* Footer height */
// }

const FooterWrapper = styled.footer`
     /* position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row ;
    justify-content: center;
    align-items: center;
    background-color: #fff; */
    
    margin: 1em 0;   
    position: block;
    width: 100%;
    
  `;


const FooterText = styled.p`
  font-size: 1em;
  font-weight: 300; 
  text-align: center;
  `;

const GatsbyIcon = styled(GrGatsbyjs)`
    height: 20px;
    width: 20px;
    padding-left: 5px;
 `;