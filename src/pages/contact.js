import React from "react"
import Contact from "../components/form"
import Layout from '../components/layout';
import styled from "styled-components";

const ContactWrapper = styled.div`
  /* margin-top: 30px;
  width: 30vw; */
`;



const ContactPage = () => {
    return (
        <Layout pageTitle="Contact">
            <ContactWrapper>
            <Contact /> 
            </ContactWrapper>
        </Layout>
        
    )
}

export default ContactPage