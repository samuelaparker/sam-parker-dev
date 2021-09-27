import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { globalColors } from '../assets/GlobalStyles'

export default function Experiments() {
    return (
        <Layout pageTitle='Experiments'>
            
            <StyledLink to='/grid-experiment'>Grid Experiment</StyledLink>
            
        </Layout>
    )
}


//CREATE A GLOBAL HEADING STYLE



// const StyledWrapper = styled.div`
//      padding: 1.35rem;
//      border-radius: 4px;
//      border: .2rem solid;
// `

const StyledLink = styled(props => <Link {...props} />)`
    display: block;
    padding-right: 2rem;
    text-decoration: none;
    font-size: 1.2rem;
    color: black;
    margin-right: 1vw;
    padding: 1.35rem;
     border-radius: 4px;
     border: .2rem solid;
    &:hover {
    color: ${globalColors.brandGreen};
   
}
`;