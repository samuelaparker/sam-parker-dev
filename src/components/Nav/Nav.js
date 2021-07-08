import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLinkWrapper = styled.li`
    display: flex;
    list-style: none;
    padding-left: 0;
    
`;

const NavLinkItem = styled(props => <Link {...props} />)`
    padding-right: 2rem;
    text-decoration: none;
    color: black;
    &:hover {
    color: rgb(92, 92, 92);
}
`;


const Nav = () => {
    return (
        <nav>
            <NavLinkWrapper>
                <NavLinkItem to="/">Home</NavLinkItem>
                <NavLinkItem to="/about">About</NavLinkItem>
                <NavLinkItem to="/blog">Blog</NavLinkItem>

            </NavLinkWrapper>
        </nav>
    )
}


export default Nav