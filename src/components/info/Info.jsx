import styled from "styled-components";
import { Button } from "../button/Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
`;
const Container = styled.div`
  // padding: calc((100vh - 1300px) / 2);
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  } ;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 2rem 2rem;
  }
`;
const ColumnRight = styled.div`
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const Info = ({ info }) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{info.heading}</h1>
          <p>{info.paragraphOne}</p>
          <p>{info.paragraphOne}</p>
          <Button primary="true" to="/homes">
            {info.buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <img src={info.image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Info;
