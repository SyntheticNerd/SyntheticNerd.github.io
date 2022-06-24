import React from "react";
import styled from "styled-components";

const ReactStoreFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
`;

export default function Api() {
  return (
    <ReactStoreFrame
      title='test'
      src='https://syntheticdesigner.github.io/fake-store-react-app/'
      id='reactStoreFrame'
    />
  );
}
