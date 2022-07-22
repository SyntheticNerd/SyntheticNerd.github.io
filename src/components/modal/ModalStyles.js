import styled from "styled-components";

export const ModBox = styled.div`
  position: fixed;
  display: ${({ open }) => (open ? "flex" : "none")};

  top: ${({ top }) => (top ? top : "0px")};
  bottom: ${({ bottom }) => (bottom ? bottom : "0px")};
  left: ${({ left }) => (left ? left : "0px")};
  right: ${({ right }) => (right ? right : "0px")};

  width: ${({ width }) => (width ? width : "100vw")};
  height: ${({ height }) => (height ? height : "100vh")};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "5")};

  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "rgba(0, 0, 0, 0.7)"};
  background-image: ${({ bgImage }) => (bgImage ? bgImage : "none")};
  padding: ${({ padding }) => (padding ? padding : "32px")};

  justify-content: center;
`;

export const CloseBtn = styled.button`
  position: absolute;
  height: 48px;
  width: 48px;
  z-index: 2;
  top: 8px;
  right: 8px;
  border-radius: 50%;
  border: none;
  background-image: var(--gold-gradient);
  transition: translate 0.3s;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  right: 32px;
  top: 32px;
  &::before {
    content: "";
    border-radius: 50%;
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    top: 2px;
    left: 2px;
    position: absolute;
    z-index: -1;
    background-color: var(--elevation5);
  }
  div {
    height: 50%;
    width: 4px;
    background-image: var(--gold-gradient);
    position: absolute;
    border-radius: 4px;
  }
  .line1 {
    transform: rotate(45deg);
  }
  .line2 {
    transform: rotate(-45deg);
  }
`;

export const ChildWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
`;

export const ModBG = styled.div`
  top: ${({ top }) => (top ? top : "0px")};
  bottom: ${({ bottom }) => (bottom ? bottom : "0px")};
  left: ${({ left }) => (left ? left : "0px")};
  right: ${({ right }) => (right ? right : "0px")};

  width: ${({ width }) => (width ? width : "100vw")};
  height: ${({ height }) => (height ? height : "100vh")};
  position: fixed;
`;

export const ModControls = styled.div`
  position: fixed;
  top: 64px;
`;
