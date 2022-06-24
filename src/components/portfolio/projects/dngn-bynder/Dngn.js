import React from "react";
import styled from "styled-components";

const DngnFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
`;

export default function Dngn() {
  return (
    <DngnFrame
      title='test'
      src='https://dngnbinder.web.app/'
      id='dngn-bynder'
    />
  );
}
