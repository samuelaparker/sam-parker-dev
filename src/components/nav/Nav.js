import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { globalColors } from "../../assets/GlobalStyles";
import PropTypes from "prop-types";

const Nav = ({ testProp }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <NavLinkWrapper isOpen={isOpen}>
        <HamburgerWrapper onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <Hamburger isOpen={isOpen}>
            <Top isOpen={isOpen} />
            <Middle isOpen={isOpen} />
            <Bottom isOpen={isOpen} />
          </Hamburger>
        </HamburgerWrapper>
        <NavLinkItem
          testprop={testProp}
          to="/"
          activeStyle={{ color: globalColors.brandGreen }}
          isOpen={isOpen}
        >
          Home
        </NavLinkItem>
        <NavLinkItem
          to="/about"
          activeStyle={{ color: globalColors.brandGreen }}
          isOpen={isOpen}
        >
          About
        </NavLinkItem>
        <NavLinkItem
          to="/blog"
          activeStyle={{ color: globalColors.brandGreen }}
          isOpen={isOpen}
        >
          Blog
        </NavLinkItem>
        <NavLinkItem
          to="/contact"
          activeStyle={{ color: globalColors.brandGreen }}
          isOpen={isOpen}
        >
          Contact
        </NavLinkItem>
        <NavLinkItem
          to="/experiments"
          activeStyle={{ color: globalColors.brandGreen }}
          isOpen={isOpen}
        >
          Experiments
        </NavLinkItem>
      </NavLinkWrapper>
    </nav>
  );
};

Nav.propTypes = {
  testProp: PropTypes.string,
};

export default Nav;

const NavLinkWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  padding: 2rem;

  @media (max-width: 920px) {
    overflow: hidden;
    transition: max-height 0.3s ease-in;
    width: 100%;
    flex-direction: ${({ isOpen }) => (isOpen ? "column" : "none")};
    align-items: ${({ isOpen }) => (isOpen ? "right" : "center")};
  }
`;

const NavLinkItem = styled((props) => <Link {...props} />)`
  padding-right: 2rem;
  font-size: clamp(0.8rem, 8vw, 1.7rem);
  font-family: stratos, sans-serif;
  text-decoration: none;
  color: black;

  &:hover {
    color: rgb(92, 92, 92);
  }
  @media (max-width: 920px) {
    flex-direction: ${({ isOpen }) => (isOpen ? "column" : "none")};
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    align-items: ${({ isOpen }) => (isOpen ? "stretch" : "center")};
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  align-items: center;
  padding: 0;
  width: 3em;
  height: 3em;
  cursor: pointer;
  @media (max-width: 920px) {
    display: flex;
    margin-top: ${({ isOpen }) => (isOpen ? "1em" : "")};
  }
`;

const Hamburger = styled.div`
  position: ${({ isOpen }) => (isOpen ? "block" : "flex")};
  display: flex;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  z-index: 10;
`;

const Top = styled.span`
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};

  @media (max-width: 920px) {
    background: black;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 4px;
  }
`;
const Middle = styled.span`
  display: ${({ isOpen }) => (isOpen ? "none" : "")};
  transform: ${({ isOpen }) => (isOpen ? "translateX(20px)" : "translateX(0)")};
  @media (max-width: 920px) {
    background: black;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 4px;
  }
`;
const Bottom = styled.span`
  transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};

  @media (max-width: 920px) {
    background: black;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 4px;
  }
`;
