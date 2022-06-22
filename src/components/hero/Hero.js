import React from "react";

import styled from "styled-components";
import { GoldSpan } from "../StyledComponents";
import Typed from "react-typed";

const HeroWrapper = styled.div`
  min-height: calc(100vh - 64px);
  display: grid;
  place-items: center;
  div {
    margin-left: 0;
    text-align: left;
    background-image: var(--gold-gradient);
    width: fit-content;
    padding: min(3%, 80px) min(5%, 60px);
    width: 80%;
    max-width: max(600px);
    position: relative;
    z-index: 1;
    margin-top: -64px;
    box-shadow: 0px 8px 16px var(--shadow1);
    h1 {
      display: flex;
      align-items: flex-end;
      font-size: min(3.5em, max(10vw, 2.5em));
    }
    h2 {
      font-size: min(3em, max(10vw, 1.8em));
    }
    .name {
      margin-left: 0.2em;
    }
    &::before {
      content: "";
      background-color: var(--elevation4);
      height: calc(100% - 8px);
      width: calc(100% - 8px);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <div>
        <h1>Hello,</h1>
        <h1>
          I'm <GoldSpan className='name'>Andrew</GoldSpan>,
        </h1>
        <h2>
          <Typed
            strings={[
              "Web Developer",
              "UX Designer",
              "Game Developer",
              "Digital Artist",
              "React Developer",
            ]}
            typeSpeed={35}
            backSpeed={50}
            loop
          />
        </h2>
      </div>
    </HeroWrapper>
  );
}
