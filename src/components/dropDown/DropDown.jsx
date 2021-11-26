import styled from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../../data/MenuData";
import { Button } from "../button/Button";
import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000d1a;
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
const DropDownWrapper = styled.div``;
const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  } ;
`;
const DropDownLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const DropDown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropDownWrapper>
        <DropDownMenu>
          {menuData.map((item, index) => {
            return (
              <DropDownLink to={item.link} key={index}>
                {item.title}
              </DropDownLink>
            );
          })}
        </DropDownMenu>
        <BtnWrap>
          <Button round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropDownWrapper>
    </DropdownContainer>
  );
};

export default DropDown;
