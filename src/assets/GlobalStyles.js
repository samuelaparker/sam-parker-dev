import styled from 'styled-components';
import { Link } from 'gatsby'
import React from 'react';


export const StyledLink = styled(props => <Link {...props} />)`
    padding-right: 2rem;
    text-decoration: none;
    color: black;
    &:hover {
    color: rgb(92, 92, 92);
}
`;