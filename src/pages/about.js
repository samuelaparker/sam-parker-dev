import * as React from 'react'
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image'
import { align, image } from './about.module.css'


const About = () => {
    return (
        <Layout pageTitle="About Me">
            <p className={align}>Hihi, my name is Sam Parker and I'm the creator of this site which I built using Gatsby and ReactJS.</p>
            <StaticImage className={image}
                src="../images/IMG_6633.JPG"
                alt="photo of a beautiful lake in Maine."
            />
        </Layout>
    )
}

export default About;

