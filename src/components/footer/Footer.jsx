import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components/macro";

const Section = styled.section`
  background-color: #000d1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  padding: 2rem;
  @media screen and (min-width: 468px) {
    flex-direction: row;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    color: #fff;
    font-size: 1rem;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const SocialIcons = styled.div`
  display: flex;
`;
const SocialLink = styled.a`
  margin-right: 10px;
  color: white;
  .icon {
    font-size: 20px;
  }
  @media screen and (min-width: 468px) {
    margin-right: 1.5rem;
    font-size: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Right>
        <h1>Let's Find your Dream Home</h1>
      </Right>
      <Left>
        <SocialIcons>
          <SocialLink href="https://www.facebook.com/">
            <FaFacebookF className="icon" />
          </SocialLink>
          <SocialLink href="https://www.youtube.com/">
            <FaYoutube className="icon" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/">
            <FaLinkedin className="icon" />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/?hl=es">
            <FaInstagram className="icon" />
          </SocialLink>
        </SocialIcons>
      </Left>
    </Section>
  );
};

export default Footer;
