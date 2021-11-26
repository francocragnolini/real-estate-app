import styled from "styled-components/macro";
import { Button } from "../button/Button";
import { infoDataTwo } from "../../data/InfoData";

const Section = styled.section``;
const ContainerInterior = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000d1a;
  // padding: 3rem 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 80vh;
    line-height: 0px;
    padding: 3rem 0;
    background-color: none;
  }
`;
const Left = styled.div`
  order: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 0 2rem 2rem;
  p {
    padding: 2rem 0;
  }
  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  @media screen and (min-width: 768px) {
    width: 65%;
    padding: 1rem 2rem 2rem;
  }
`;
const BtnWrapper = styled.div``;
const Right = styled.div`
  order: 2;
  line-height: 0px;
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`;

const Interior = () => {
  return (
    <Section>
      <ContainerInterior>
        <Left>
          <h1>{infoDataTwo.heading}</h1>
          <p>{infoDataTwo.paragraphOne}</p>
          <BtnWrapper>
            <Button primary="true" to="/homes">
              View Homes
            </Button>
          </BtnWrapper>
        </Left>
        <Right>
          <video
            src="https://player.vimeo.com/external/539010008.sd.mp4?s=790251ba7c25525475d18e698ae413978b66ae44&profile_id=164&oauth2_token_id=57447761"
            autoPlay
            loop
          />
        </Right>
      </ContainerInterior>
    </Section>
  );
};

export default Interior;
