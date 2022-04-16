import { FlexRow, Goldh1, Goldp, Transform3D } from "../StyledComponents";
import Carousel from "../carousel/Carousel";
import { M8BFrame } from "../portfolio/projects/magic-8-ball/M8BStyle";
import { TetrisFrame } from "../portfolio/projects/tetris/TPStyles";
import LeftCarousel from "./LeftCarousel";
import RightCarousel from "./RightCarousel";

export default function Home() {
  return (
    <>
      <Goldh1>Elegant Design / {`<Robust Code>`} </Goldh1>
      <LeftCarousel />
      <RightCarousel />
    </>
  );
}
