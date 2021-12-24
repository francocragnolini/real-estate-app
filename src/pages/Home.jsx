import Hero from "../components/hero/Hero";
import Info from "../components/info/Info";
import { sliderData } from "../data/SliderData";
import { infoData } from "../data/InfoData";
import { infoDataTwo } from "../data/InfoData";

import Interior from "../components/interior/Interior";

const Home = () => {
  return (
    <>
      <Hero slides={sliderData} />
      <Info info={infoData} />
      <Interior />
      <Info info={infoDataTwo} />
    </>
  );
};

export default Home;
