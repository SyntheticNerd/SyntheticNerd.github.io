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
  --elevation3: #2c2c2c;
  --shadow1: rgba(0, 0, 0, 0.5);
  --fontHighEmp: rgba(255, 255, 255, 0.88);
  --fontMedEmp: rgba(255, 255, 255, 0.75);
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
  padding: 0px 68px;
  overflow-x: scroll;
  scroll-behavior: smooth;
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
    @media (max-width: 900px) {
      scale: 0.8;
      margin: 0px -40px;
    }
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
  transition: all 0.3s, scale 0.3s;
  box-shadow: 0px 4px 4px var(--shadow1);
  z-index: 1;  
  &:hover {
    opacity: 1;
    scale: 1.05;
    &:after{
      content:'';
      width: 100%;
      height: 2em;
      background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.27) 18.79%, rgba(0, 0, 0, 0.41) 37.78%, rgba(0, 0, 0, 0.4) 62.5%, rgba(0, 0, 0, 0.27) 79.75%, rgba(0, 0, 0, 0) 100%);
      z-index: 1;
      position: absolute;
      opacity: 1;
    }
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

export const ArrowBtn = styled.button`
  border: none;
  display: flex;
  height: 4em;
  width: 4em;
  border-radius: 50%;
  background: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
  transition: all 0.1s;
  margin: 0px 8px;
  position: absolute;
  top: 50%;
  z-index: 2;
  ${({ direction }) => direction}: 8px;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.8);
    scale: 1.1;
  }
  svg{
    position: absolute;
  }
  i{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ direction }) => direction}: 45%;
  }
`;

export const FullPreview = styled.div`
  scale: ${({ scale }) => (scale ? scale : "0.5")};
  pointer-events: none;
`;

export const TagBox = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  bottom: 0;
  padding: 32px;
  width: 100%;
`;

export const Tag = styled.p`
  margin: 4px;
  z-index: 1;
  background-color: var(--elevation3);
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 300;
  color: var(--fontMedEmp);
  pointer-events: none;
`;
