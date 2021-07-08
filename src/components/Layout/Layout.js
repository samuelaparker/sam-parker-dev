import * as React from 'react'
import Nav from '../Nav'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

const LayoutWrapper = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 3rem;
    color: #404A42;
    font-weight: 500;
`;
const Container = styled.main`
    margin: 0 auto;
    max-width: 1440px;
    font-family: sans-serif;
`;
const Heading = styled.h1`
    color: #529361;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;





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

    return (
        <Container>
            <Helmet>
                <title>{`${pageTitle}`} | {`${data.site.siteMetadata.title}`}</title>
            </Helmet>
            {/* <p className={`${siteTitle}  ${layoutWrapper}`}>{data.site.siteMetadata.title}</p> */}
            <LayoutWrapper>{data.site.siteMetadata.title}</LayoutWrapper>
            <Nav />
            <Heading>{pageTitle}</Heading>
            {children}
            <Footer />
       </Container>
    )
}


export default Layout