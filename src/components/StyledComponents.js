import styled, { createGlobalStyle } from "styled-components";

export const CSSVariables = styled.div`
  --gold-gradient: linear-gradient(
    #bf953f -65%,
    #fcf6ba -26.33%,
    #b38728 20.08%,
    #fbf5b7 63.91%,
    #aa771c 100%
  );
  --elevation2: #1e1e1e;
  --shadow1: rgba(0, 0, 0, 0.5);
`;

export const Goldh1 = styled.h1`
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  /* text-shadow: -2px -2px 2px rgba(0, 0, 0, 0.8); */
  margin: 32px;
`;

export const Goldp = styled.p`
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  /* text-shadow: -2px -2px 2px rgba(0, 0, 0, 0.8); */
  padding: 32px;
  opacity: 88%;
`;

export const Carousel = styled.ul`
  position: relative;
  list-style-type: none;
  display: flex;
  width: 100%;
  padding-left: 64px;
  overflow-x: scroll;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &:-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  a {
    text-decoration: none;
    color: white;
    position: relative;
  }
`;

export const LgCard = styled.li`
  background-color: var(--elevation2);
  width: 300px;
  height: 200px;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.2;
  transition: opacity 0.3s, scale 0.3s;
  box-shadow: 0px 4px 4px var(--shadow1);
  z-index: 1;
  &:hover {
    opacity: 1;
    scale: 1.05;
  }
`;

export const LinkText = styled.p`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  pointer-events: none;
  width: 100%;
`;

export const FullPreview = styled.div`
  scale: ${({ scale }) => (scale ? scale : "0.5")};
  pointer-events: none;
`;
