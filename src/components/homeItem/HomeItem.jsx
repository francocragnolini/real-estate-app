import styled from "styled-components";

const Item = styled.div`
  width: auto;
  height: auto;
  position: relative;
  img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
const Btn = styled.button`
  background: #cc570b;
  color: white;
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.4s all ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const HomeItem = ({ url }) => {
  return (
    <Item>
      <img src={url.regular} alt="home" />
      <Info>
        <Btn>View Home</Btn>
      </Info>
    </Item>
  );
};

export default HomeItem;
