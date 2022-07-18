import React from "react";
import styled from "styled-components";

const TeslaShopFrame = styled.iframe`
  height: 125%;
  width: 125%;
  border: none;
  -ms-zoom: 0.8;
  -moz-transform: scale(0.8);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.8);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.8);
  -webkit-transform-origin: 0 0;
  /* @media (max-width: 750px) {
    height: 400%;
    width: 400%;
    -ms-zoom: 0.25;
    -moz-transform: scale(0.25);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.25);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.25);
    -webkit-transform-origin: 0 0;
  } */
`;

export default function KAConstruction() {
  return (
    <TeslaShopFrame
      title='test'
      src='https://syntheticdesigner.github.io/tesla-group-project/'
      id='teslaShopFrame'
    />
  );
}
