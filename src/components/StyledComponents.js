import styled from "styled-components";

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
  font-weight: 400;
  /* text-shadow: -2px -2px 2px rgba(0, 0, 0, 0.8); */
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

export const CarouselList = styled.ul`
  position: relative;
  list-style-type: none;
  display: flex;
  width: ${({ width }) => (width ? width : "100%")};
  padding: 0px 68px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  transition: all 0.6s ease;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  a {
    text-decoration: none;
    color: white;
    position: relative;
    @media (max-width: 900px) {
      -webkit-transform: scale(0.8);
      -moz-transform: scale(0.8);
      -o-transform: scale(0.8);
      transform: scale(0.8);
      margin: 0px -40px;
    }
  }
`;

export const LgCard = styled.li`
  background-color: var(--elevation2);
  width: 300px;
  height: 160px;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.2;
  transition: transform 0.2s, z-index 0.3s;
  -webkit-transition: transform 0.2s, z-index 0.3s;
  box-shadow: 0px 4px 4px var(--shadow1);
  z-index: 1;
  &:after {
    content: "";
    width: 100%;
    height: 2em;
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.27) 18.79%,
      rgba(0, 0, 0, 0.41) 37.78%,
      rgba(0, 0, 0, 0.4) 62.5%,
      rgba(0, 0, 0, 0.27) 79.75%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: -1;
    position: absolute;
  }
  &:hover {
    opacity: 0.8;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    &:after {
      z-index: 1;
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
    -webkit-transform: translateY(-50%) scale(1.1);
    transform: translateY(-50%) scale(1.1);
  }
  svg {
    position: absolute;
  }
  i {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ direction }) => direction}: 45%;
  }
`;

export const FullPreview = styled.div`
  -webkit-transform: ${({ scale }) =>
    scale ? `scale(${scale})` : "scale(0.5)"};
  -moz-transform: ${({ scale }) => (scale ? `scale(${scale})` : "scale(0.5)")};
  -o-transform: ${({ scale }) => (scale ? `scale(${scale})` : "scale(0.5)")};
  transform: ${({ scale }) => (scale ? `scale(${scale})` : "scale(0.5)")};
  pointer-events: none;
`;

export const TagBox = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  bottom: 0;
  padding: 32px;
  width: 110%;
  transform: translateX(-4%);
  z-index: 1;
  pointer-events: none;
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

export const SectionTitle = styled.div`
  text-align: left;
  margin: 32px auto;
  padding-left: 96px;
  @media (max-width: 700px) {
    margin: 32px auto 32px 32px;
    & > h1 {
      font-size: 5vw;
    }
  }
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 64px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ModalBox = styled.div`
  /* position: fixed; */
  display: ${({ open }) => (open ? "flex" : "none")};
  top: 64px;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 5;
  background-color: rgba(220, 56, 42, 0.3);
  & > div {
    /* transform: scale(0.9) translateY(-5%); */
    height: 80%;
    width: 90%;
    overflow-y: scroll;
    background-color: #2e2e2e;
  }
`;

export const Transform3D = styled.div`
  position: relative;
  width: 70%;
  /* border: 2px solid red; */
  transform: perspective(100px) rotateX(-0.5deg) rotateY(3deg) scale(0.8);
`;

export const Article = styled.article`
  width: 40%;
  text-align: left;
  p {
    margin: 24px 0px;
    color: rgba(255, 250, 206, 0.8);
  }
  h1 {
    font-size: 1.5em;
  }
  @media(max-width: 900px){
    width: 80%;
  }
`;
