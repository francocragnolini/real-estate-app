import { useContext } from "react";
import styled from "styled-components";
import HomeItem from "../components/homeItem/HomeItem";
import { UnsplashContext } from "../context/UnsplashContext";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 4rem;
  @media screen and (max-width: 425px) {
    padding: 6rem 1.5rem 3rem;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;

  gap: 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 400px 400px;
  }
`;

const Homes = () => {
  const { listPhotos } = useContext(UnsplashContext);

  return (
    <Section>
      <Wrapper>
        {listPhotos.map((item, index) => (
          <HomeItem key={index} url={item.urls} />
        ))}
      </Wrapper>
    </Section>
  );
};

export default Homes;
