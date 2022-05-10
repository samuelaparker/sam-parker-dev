import * as React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Footer from "../components/footer";
import { navigate } from "gatsby";

/*
NOTE RE StaticImage plugin:
The StaticImage component does not support higher-order components, which includes the styled function from 
libraries such as Emotion and styled-components. The parser relies on being able to identify StaticImage 
components in the source, and passing them to a function means this is not possible.
*/

const IndexPage = () => {
  function handleFirstImageClick(e) {
    e.preventDefault();
    navigate("/grid-experiment");
  }
  function handleSecondImageClick(e) {
    e.preventDefault();
    navigate("/blog/first-post");
  }

  return (
    <Layout pageTitle="Home">
      <Helmet
        title="Sam Parker / Samuel Parker - Developer"
        meta={[
          {
            name: "Samuel Parker",
            content: "Portfolio - samparker.dev",
          },
          {
            name: "Sam Parker",
            content: "Sam Parker - samuelaparker - Front End Developer",
          },
        ]}
      ></Helmet>
      <LayoutWrapper>
        <p></p>
      </LayoutWrapper>
      <div>
        <StyledImageBorder>
          <StaticImage
            style={imageStyle}
            src="..//assets/images/maine-coast.jpeg"
            alt="photo of the Maine coast."
            onClick={handleFirstImageClick}
          />
        </StyledImageBorder>
        <StyledImageBorder>
          <StaticImage
            style={imageStyle}
            src="../assets/images/karl-magnuson-oFB97KdJBFk-unsplash.jpg"
            alt="photo of a beautiful lake in Maine."
            onClick={handleSecondImageClick}
          />
        </StyledImageBorder>
      </div>
  
    </Layout>
  );
};

export default IndexPage;

const imageStyle = {
  WebkitBorderRadius: "50%",
  MozBorderRadius: "50%",
  borderRadius: "50%",
  khtmlBorderRadius: "50%",
  cursor: "pointer",
};

const StyledImageBorder = styled.div`
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -khtml-border-radius: 50%;
  margin: 0.5em 0;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
