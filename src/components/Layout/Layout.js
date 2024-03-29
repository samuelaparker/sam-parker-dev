import * as React from "react";
import Nav from "../nav";
import Footer from "../footer";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { GlobalStyle } from "../../assets/GlobalStyles";

const Layout = ({ pageTitle, children }) => {
  // const data = useStaticQuery(graphql`
  // query MyQuery {
  //   site {
  //     id
  //     siteMetadata {
  //       title
  //     }
  //   }
  // }
  // `)

  return (
    <Container>
      <GlobalStyle />
      <Helmet>
        <title>
          {`${pageTitle}`} | {`${"Hello, I'm Sam Parker"}`}
        </title>
      </Helmet>
      <StyledTitle>{"Hello, I'm Sam Parker"}</StyledTitle>
      <Nav />
      <Spacer1 />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Spacer1 = styled.div`
  margin-top: 3em;
`;

const StyledTitle = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: clamp(1rem, 10vw, 4rem);
  color: #529361;
  font-weight: 500;
`;
const Container = styled.main`
  margin: 0 auto;
  max-width: 1440px;
  min-height: 100vh;
  position: relative;
  font-family: stratos, sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 1em 2em;
`;
// const Heading = styled.h1`
//     color: #529361;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
// `;
// const Spacer = styled.div`
//    height: 9rem;
//    `;
