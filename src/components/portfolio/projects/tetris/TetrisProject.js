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
      <SectionTitle>
        <Goldh1>Tetris</Goldh1>
      </SectionTitle>
      <FlexRow>
        <Article>
          <p>
            You can use the arrow keys or the buttons provided on the screen. To
            keep the game fair and challenging pausing the game will require a
            restart.
          </p>
          <p>
            
          </p>
          <p>
            
          </p>
        </Article>
        {/* <Tetris /> */}
        <TetrisFrame
          title='test'
          src='https://syntheticdesigner.github.io/tetris-react/'
          id='m8bIframe'
        />
      </FlexRow>
    </TetrisPortfolioBox>
  );
}
