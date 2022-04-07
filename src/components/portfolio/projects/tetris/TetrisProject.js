import React from "react";
import { Article, FlexRow, Goldh1, SectionTitle } from "../../../StyledComponents";
import { M8BFrame } from "../magic-8-ball/M8BStyle";
import Tetris from "./tetris-src/components/Tetris";
import { TetrisPortfolioBox } from "./TPStyles";

export default function TetrisProject() {
  return (
    <TetrisPortfolioBox>
      <SectionTitle>
        <Goldh1>Tetris</Goldh1>
      </SectionTitle>
      <FlexRow>
      <Article>
          <p>
            This is a simple game of Tetris. You can use the arrow keys and 
          </p>
          <p>
            Creating the collapsable modal for the sandwich icon was challenging
            in vanilla Java Script. Given further development I would refine the
            responsive nature of each component.
          </p>
          <p>
            <b>Design/UX considerations:</b> Dark themes while easy on the eyes
            can make readability a problem. I mitigate this by making text glow
            when hovering. The Second is the floating animation. While
            animations are great for engaging a users attention they are a
            little too good and can be distracting. For this reason I include
            the ability to deactivate the animation.
          </p>
        </Article>
        {/* <Tetris /> */}
        <M8BFrame
          title='test'
          src='https://syntheticdesigner.github.io/tetris-react/'
          id="m8bIframe"
        />
      </FlexRow>
    </TetrisPortfolioBox>
  );
}
