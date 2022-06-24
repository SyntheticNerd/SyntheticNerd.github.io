import React from "react";
import {
  Article,
  FlexRow,
  Goldh1,
  SectionTitle,
} from "../../../StyledComponents";
import { TetrisPortfolioBox, TetrisFrame } from "./TPStyles";

export default function TetrisProject() {
  return (
    <TetrisPortfolioBox>
      {/* <Tetris /> */}
      <TetrisFrame
        title='test'
        src='https://syntheticdesigner.github.io/tetris-react/'
        id='m8bIframe'
      />
    </TetrisPortfolioBox>
  );
}
