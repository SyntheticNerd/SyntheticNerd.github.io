import styled from "styled-components";

export const ModBox = styled.div`
  position: fixed;
  display: ${({ open }) => (open ? "flex" : "none")};

  top: ${({top})=>top?top:"0px"};
  bottom: ${({bottom})=>bottom?bottom:"0px"};
  left: ${({left})=>left?left:"0px"};
  right: ${({right})=>right?right:"0px"};

  width: ${({width})=>width?width:"100vw"};
  height: ${({height})=>height?height:"100vh"};
  z-index: ${({zIndex})=>zIndex?zIndex:"5"};

  background-color: ${({bgColor})=>bgColor?bgColor:"rgba(0, 0, 0, 0.7)"};
  background-image: ${({bgImage})=>bgImage?bgImage:"none"};
  padding: ${({padding})=>padding?padding:"32px"};

  justify-content: center;
`;

export const ChildWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  align-items: center;
  /* width: 100%; */
`;

export const ModBG = styled.div`
  top: ${({top})=>top?top:"0px"};
  bottom: ${({bottom})=>bottom?bottom:"0px"};
  left: ${({left})=>left?left:"0px"};
  right: ${({right})=>right?right:"0px"};

  width: ${({width})=>width?width:"100vw"};
  height: ${({height})=>height?height:"100vh"};
  position: fixed;
`;

export const ModControls = styled.div`
  position: fixed;
  top: 64px;
`;
