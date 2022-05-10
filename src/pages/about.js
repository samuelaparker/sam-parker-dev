import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout pageTitle="About Me">
      <Paragraph>
        Hi, my name is Sam Parker. I'm a developer in NYC and I'm the creator of
        this site which I built using Gatsby.
      </Paragraph>
      <Paragraph>
        You can find me on &nbsp;
        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/samuelaparker/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Linkedin&nbsp;{" "}
        </a>{" "}
        and&nbsp;
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/samuelaparker"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" Github "}
        </a>
      </Paragraph>
      <Link to="/grid-experiment"></Link>
      <StaticImage
        style={image}
        src="../assets/images/IMG_6633.JPG"
        alt="photo of a beautiful lake in Maine."
        // onClick={() => {<Link to="/grid-experiment" />}}
      />
      <Spacer />
    </Layout>
  );
};

export default About;

const image = {
  marginTop: "1em",
};

const Paragraph = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1em;
`;

const Spacer = styled.div`
  height: 9rem;
`;
