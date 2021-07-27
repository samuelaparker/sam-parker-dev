import React from 'react'
import styled from 'styled-components'
import { globalColors } from '../../assets/GlobalStyles'

export default function Card({ firstName, lastName, thumbnail, location }) {

    
    return (
        <StyledItem>
            <StyledThumbnailWrapper>
                <StyledThumbnail src={thumbnail} alt="thumbnail" />
            </StyledThumbnailWrapper>
            <h1>{lastName}</h1>
            <h2>{firstName}</h2>
            <p>{location.city}, {location.state}</p>
        </StyledItem>
    )
}


// const CardStyled = styled.div`
//     background-color: lightgrey;
//     cursor: pointer;
//     margin-bottom: 0,5rem;
//     padding: 0,5rem 1 rem;
//     max-width: 300px;
//     border-radius: 3px;
//     box-shadow: #091e4240 0px 1px 0px 0px;
//`
const StyledItem = styled.div`
  padding: 1.35rem;
  background: ${globalColors.brandGreen};
  border-radius: 4px;
`
const StyledThumbnailWrapper = styled.div`
    display: inline-block;

`
const StyledThumbnail = styled.img`
    padding: 0.3rem;
    max-width: 100%;
    min-width: 5rem;
    border-radius: 50%;
`