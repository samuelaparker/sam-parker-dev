import * as React from 'react'
import styled from 'styled-components'

export default function Card({ firstName, lastName, thumbnail, location }) {

    return (
        <CardContainer>
            <StyledItem>
                <StyledThumbnailWrapper>
                    <StyledThumbnail src={thumbnail} alt="thumbnail" />
                </StyledThumbnailWrapper>
                <h1>{lastName}</h1>
                <h2>{firstName}</h2>
                <p>{location.city}, {location.state}</p>
            </StyledItem>
        </CardContainer>
    )
}




const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 3em;
`

const StyledItem = styled.div`
  width: 22em;
  height: 22em;
  padding: 2em;;
  display: block;
  @media (max-width: 768px) {
    

  }
  border-radius: 4px;
  border: 1rem solid;
  cursor: grab;
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