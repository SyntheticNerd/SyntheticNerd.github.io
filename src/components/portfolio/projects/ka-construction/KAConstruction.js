import React from "react";
import styled from "styled-components";

const KAConstructionFrame = styled.iframe`
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
  @media (max-width: 750px) {
    height: 400%;
  width: 400%;
  -ms-zoom: 0.25;
  -moz-transform: scale(0.25);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.25);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.25);
  -webkit-transform-origin: 0 0;
  }
`;

export default function KAConstruction() {
  return (
    <KAConstructionFrame
      title='test'
      src='https://syntheticdesigner.github.io/k-a-construction/'
      id='reactStoreFrame'
    />
  );
}
