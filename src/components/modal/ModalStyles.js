import styled from "styled-components";

export const ModBox = styled.div`
  /* position: fixed; */
  display: ${({ open }) => (open ? "flex" : "none")};
  top: 64px;
  width: 100%;
  height: calc(100vh - 64px);
  position: fixed;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  padding: 32px;
  overflow: auto;
`;

export const ChildWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ModBG = styled.div``;

export const ModControls = styled.div`
    position: fixed;
    top: 64px;
`;
