import React from "react"
import Contact from "../components/form"
import Layout from '../components/layout';
import styled from 'styled-components';



const ContactPage = () => {
    return (
        <Layout pageTitle="Contact">
            <div>
                <Contact/>
            </div>
           <Spacer />
        </Layout>
        
    )
}

export default ContactPage

const Spacer = styled.div`
   height: 9rem;
   `;