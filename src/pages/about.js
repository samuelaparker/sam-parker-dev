import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout pageTitle="About Me">
      <Paragraph>
        Hi, my name is Sam Parker.
      </Paragraph>
      <Paragraph>
        Over the past 3 years, I've worked on diverse client projects including marketing websites for software development agencies and fintech web applications. I’ve honed my skills in Javascript, HTML, CSS, React, and Typescript and am always deepening my knowledge of software engineering. I value clean code and efficient teamwork. My multidisciplinary background equips me to handle new challenges and I enjoy collaborating and learning from talented colleagues.
      </Paragraph>
      <Paragraph>
        You can find me on&nbsp;
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
          {" Github. "}
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
  justify-content: start;
  padding-bottom: 1em;
`;

const Spacer = styled.div`
  height: 9rem;
`;
