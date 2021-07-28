import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// import { globalColors } from '../../assets/GlobalStyles'


const Nav = () => {
    return (
        <nav>
            <NavLinkWrapper>
                <NavLinkItem to="/">Home</NavLinkItem>
                <NavLinkItem to="/about">About</NavLinkItem>
                <NavLinkItem to="/blog">Blog</NavLinkItem>
                <NavLinkItem to="/contact">Contact</NavLinkItem>
                <NavLinkItem to="/experiments">Experiments</NavLinkItem>

            </NavLinkWrapper>
        </nav>
    )
}


export default Nav


const NavLinkWrapper = styled.li`
    display: flex;
    list-style: none;
    padding-left: 0;
    padding: 2rem;
`;

const NavLinkItem = styled(props => <Link {...props} />)`
    padding-right: 2rem;
    font-size: 1.7em;
    text-decoration: none;
    color: black;
    &:hover {
    color: rgb(92, 92, 92);
}
`;
