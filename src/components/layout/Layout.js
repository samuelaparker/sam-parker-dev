import * as React from 'react'
import Nav from '../nav'
import Footer from '../footer/Footer'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';


const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
        siteBuildMetadata {
          buildTime
        }
      }`);

console.log(data.site.siteMetadata.title)
    return (
        <Container>
            <Helmet>
                <title>{`${pageTitle}`} | {`${data.site.siteMetadata.title}`}</title>
            </Helmet>
            {/* <p className={`${siteTitle}  ${layoutWrapper}`}>{data.site.siteMetadata.title}</p> */}
            <LayoutWrapper>{data.site.siteMetadata.title}</LayoutWrapper>
            <Nav />
            {children}
            <Footer />
       </Container>
    )
}

export default Layout

const LayoutWrapper = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 3rem;
    color: #529361;
    font-weight: 500;
`;
const Container = styled.main`
    margin: 0 auto;
    max-width: 1440px;
    font-family: stratos, sans-serif;
    font-weight: 400;
    font-style: normal;
`;
// const Heading = styled.h1`
//     color: #529361;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
// `;