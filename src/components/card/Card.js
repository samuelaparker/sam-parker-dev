import React from 'react'
import styled from 'styled-components'
import { globalColors } from '../../assets/GlobalStyles'

export default function Card(props) {

    return (
        <StyledItem>
        {/* {props.data.map((n,i) => {
            return <div key={n.dob.date}>{n.name.first}, {n.name.last} {n.location.city}, {n.location.state}</div>
            }
        )} */}
        </StyledItem>
    )
}


const CardStyeld = styled.div`
    background-color: lightgrey;
    cursor: pointer;
    margin-bottom: 0,5rem;
    padding: 0,5rem 1 rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`
const StyledItem = styled.div`
  padding: 1.35rem;
  background: ${globalColors.brandGreen};
  border-radius: 4px;
`
