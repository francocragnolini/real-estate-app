import { useContext } from "react";
import styled from "styled-components";
import DropDown from "../components/dropDown/DropDown";
import { UnsplashContext } from "../context/UnsplashContext";

const Section = styled.section`
  padding: 8rem 0 4rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 3.75rem 0 2rem;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  line-height: 0;
`;
const Info = styled.div`
  padding: 2rem;
  h1 {
    margin-bottom: 15px;
  }
  p {
    line-height: 1.7;
  }
`;

const About = ({ data }) => {
  const { listPhotos } = useContext(UnsplashContext);
  console.log(listPhotos);
  return (
    <Section>
      <DropDown />
      <Container>
        <Video src={data.video} autoPlay loop />
        <Info>
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
        </Info>
      </Container>
    </Section>
  );
};

export default About;
