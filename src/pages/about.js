import * as React from 'react'
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components';

const image = {
    marginTop: '1em'
}

const Paragraph = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


const About = () => {
    return (
        <Layout pageTitle="About Me">
            <Paragraph>Hi, my name is Sam Parker. I'm a developer in NYC and I'm the creator of this site which I built using Gatsby.</Paragraph>
            <StaticImage style={image}
                src="../images/IMG_6633.JPG"
                alt="photo of a beautiful lake in Maine."
            />
        </Layout>
    )
}

export default About;


  