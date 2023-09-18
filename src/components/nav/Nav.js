import { useState } from "react";
import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { globalColors } from "../../assets/GlobalStyles";
import PropTypes from "prop-types";

const Nav = ({ testProp }) => {
  const [open, setIsOpen] = useState(false);

  return (
    <nav>
      <NavLinkWrapper open={open}>
        <HamburgerWrapper onClick={() => setIsOpen(!open)} open={open}>
          <Hamburger open={open}>
            <Top open={open} />
            <Middle open={open} />
            <Bottom open={open} />
          </Hamburger>
        </HamburgerWrapper>
        <NavLinkItem
          testprop={testProp}
          to="/"
          activeStyle={{ color: globalColors.brandGreen }}
          open={open}
        >
          Home
        </NavLinkItem>
        <NavLinkItemExternal
          testprop={testProp}
          to="https://www.samuelaparker.com/#portfolio-section"
          open={open}
        >
          Portfolio
        </NavLinkItemExternal>
        <NavLinkItem
          to="/about"
          activeStyle={{ color: globalColors.brandGreen }}
          open={open}
        >
          About
        </NavLinkItem>
        {/* <NavLinkItem
          to="/blog"
          activeStyle={{ color: globalColors.brandGreen }}
          open={open}
        >
          Blog
        </NavLinkItem> */}
        <NavLinkItem
          to="/contact"
          activeStyle={{ color: globalColors.brandGreen }}
          open={open}
        >
          Contact
        </NavLinkItem>
        <NavLinkItem
          to="/experiments"
          activeStyle={{ color: globalColors.brandGreen }}
          open={open}
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
  padding-top: 2rem;

  @media (max-width: 920px) {
    overflow: hidden;
    transition: max-height 0.3s ease-in;
    width: 100%;
    flex-direction: ${({ open }) => (open ? "column" : "none")};
    align-items: ${({ open }) => (open ? "right" : "center")};
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
    flex-direction: ${({ open }) => (open ? "column" : "none")};
    display: ${({ open }) => (open ? "block" : "none")};
    align-items: ${({ open }) => (open ? "stretch" : "center")};
  }
`;

const NavLinkItemExternal = styled((props) => <a {...props} />)`
  padding-right: 2rem;
  font-size: clamp(0.8rem, 8vw, 1.7rem);
  font-family: stratos, sans-serif;
  text-decoration: none;
  color: black;

  &:hover {
    color: rgb(92, 92, 92);
  }

  &:active {
    color: ${globalColors.brandGreen};
  }

  @media (max-width: 920px) {
    flex-direction: ${({ open }) => (open ? "column" : "none")};
    display: ${({ open }) => (open ? "block" : "none")};
    align-items: ${({ open }) => (open ? "stretch" : "center")};
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
    margin-top: ${({ open }) => (open ? "1em" : "")};
  }
`;

const Hamburger = styled.div`
  position: ${({ open }) => (open ? "block" : "flex")};
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
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};

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
  display: ${({ open }) => (open ? "none" : "")};
  transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
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
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};

  @media (max-width: 920px) {
    background: black;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 4px;
  }
`;
