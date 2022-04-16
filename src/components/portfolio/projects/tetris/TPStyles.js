import styled from "styled-components"

export const TetrisPortfolioBox = styled.div`
max-width: 1300px;
width: calc(100vw - 192px);
margin: auto;
`;

export const TetrisFrame = styled.iframe`
  width: 480px;
  max-width: 100%;
  max-height: calc(100vh - 64px);
  height: calc(667px - calc(50vw - 250px));
  min-height: 480px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  border: none;
`;