import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { globalColors } from '../../assets/GlobalStyles'


console.log(globalColors.brandGreen)

const Nav = () => {
    return (
        <nav>
            <NavLinkWrapper>
                <NavLinkItem to="/">Home</NavLinkItem>
                <NavLinkItem to="/about">About</NavLinkItem>
                <NavLinkItem to="/blog">Blog</NavLinkItem>
                <NavLinkItem to="/contact">Contact</NavLinkItem>

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
    background: ${globalColors.brandGreen};  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, white, ${globalColors.brandGreen}, white);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, white, ${globalColors.brandGreen}, white); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const NavLinkItem = styled(props => <Link {...props} />)`
    padding-right: 2rem;
    text-decoration: none;
    color: black;
    &:hover {
    color: rgb(92, 92, 92);
}
`;
