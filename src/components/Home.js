import { Goldh1, Goldp, Transform3D } from "./StyledComponents";
import Carousel from "./carousel/Carousel";
import { M8BFrame } from "./portfolio/projects/magic-8-ball/M8BStyle";

export default function Home() {
  return (
    <>
      <Goldh1>Elegant Design / {`<Robust Code>`} </Goldh1>
      {/* <Transform3D>
        <Carousel>
          <M8BFrame
            title='test'
            src='https://syntheticdesigner.github.io/magic8ball/'
            id='m8bIframe'
          />
          <M8BFrame
            title='test'
            src='https://syntheticdesigner.github.io/magic8ball/'
            id='m8bIframe'
          />
        </Carousel>
      </Transform3D> */}
      <Goldp></Goldp>
    </>
  );
}
