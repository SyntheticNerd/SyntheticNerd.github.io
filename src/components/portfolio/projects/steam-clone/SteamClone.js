import React from "react";
import styled from "styled-components";

const SteamFrame = styled.iframe`
  height: 200%;
  width: 200%;
  border: none;
  -ms-zoom: 0.5;
  -moz-transform: scale(0.5);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.5);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.5);
  -webkit-transform-origin: 0 0;
`;

export default function SteamClone() {
  return (
    <SteamFrame
      title='test'
      src='https://syntheticdesigner.github.io/steam-clone-react-app/'
      id='reactStoreFrame'
    />
  );
}
