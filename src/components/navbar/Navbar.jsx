import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../../data/MenuData";
import { Button } from "../button/Button";
import { FaBars } from "react-icons/fa";

// common styling for links
const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background-color: #000d1a;
  @media screen and (max-width: 768px) {
    background-color: #000d1a;
  }
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: white;
  } ;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

const NavMenuLink = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">Franco</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLink to={item.link} key={index}>
            {item.title}
          </NavMenuLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
