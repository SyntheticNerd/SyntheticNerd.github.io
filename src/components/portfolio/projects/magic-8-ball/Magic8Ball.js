import React from "react";
import { Article, FlexRow, Goldh1, SectionTitle } from "../../../StyledComponents";
import { M8BArticle, M8BFrame, M8BSection } from "./M8BStyle";

function Magic8Ball() {
  return (
    <M8BSection>
      <SectionTitle>
        <Goldh1>MAGIC 8 BALL</Goldh1>
      </SectionTitle>
      <FlexRow>
        {/* <M8BFrame
          src='https://codesandbox.io/embed/magic-8-ball-iocyf?codemirror=1&fontsize=12&theme=dark&view=preview'
          title='Magic 8 Ball'
          allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></M8BFrame> */}

        <M8BFrame
          title='test'
          src='https://syntheticdesigner.github.io/magic8ball/'
          id="m8bIframe"
        />
        <Article>
          <p>Ask a yes or no Question and the Ball will answer.</p>
          <p>
            I created this project with 7 Vanilla Java Script classes. CSS is
            used primarily to position elements in the page. Styling is done in
            the JS. Each class component is modular so they can be added quickly
            to future projects. They are attached to HMTL elements and then
            positioned using CSS.
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
      </FlexRow>
    </M8BSection>
  );
}

export default Magic8Ball;
