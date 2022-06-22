import styled from "styled-components";

export const Content = styled.div`
  --section1BG: rgb(117, 65, 200);
  --section2BG: rgb(72, 85, 106);
  --section5BG: rgb(25, 33, 46);
  --bg-default: rgba(255, 255, 255, 0.02);
  --textColorLight: rgba(255, 255, 255, 0.88);
  /* height: 720px; */
  width: 1800px;
  padding: 32px 0px;
  -webkit-transform: scale(0.88);
  transform: scale(0.88);
  background-color: none;

  ${({ theme }) =>
    !theme.preview &&
    `
      background-color: #101010;
      -webkit-transform: scale(1);
      transform: scale(1);
      height: fit-content;
      min-height: 100%;
      width: 100vw;
    `}
`;
export const GridContainer = styled.div`
  margin: auto;
  margin-top: 32px;
  width: 80%;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, fit-content);
  grid-template-areas:
    "box1 box1 box2 box3"
    "box4 box5 box5 box3";
  ${({ theme }) =>
    !theme.preview &&
    `
        @media(max-width: 1600px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, fit-content);
        grid-template-areas:
          "box1 box1 box2"
          "box4 box5 box5"
          "box3 box3 box3";
        }
        @media(max-width: 1200px){
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, fit-content);
          grid-template-areas:
            "box1 box2"
            "box3 box3"
            "box4 box5";
        }
        @media(max-width: 790px){
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(5, fit-content);
          grid-template-areas:
            "box1"
            "box2"
            "box4"
            "box5"
            "box3";
        }
    `}
`;
export const GridChild = styled.div`
  padding: 32px;
  text-align: left;
  ${(props) => {
    switch (props.section % 5) {
      case 0: //yah this might look a bit crazy basically it switch the style for every element in the array cycling through 5 possible styles
        return `
        grid-area: box1;
        position: relative;
        border-radius: 8px;
        background-image: url(${
          process.env.PUBLIC_URL +
          "/testimonial-grid-images/bg-pattern-quotation.svg"
        });
        background-repeat: no-repeat;
        background-position-x: 80%;
        background-size: 120px;
        background-color: var(--section1BG);
        color: var(--textColorLight);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
        `;
      case 1:
        return `
        border-radius: 8px;
        grid-area: box2;
        background-color: var(--section2BG);
        color: var(--textColorLight);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
        `;
      case 2:
        return `
        grid-area: box3;
        border-radius: 8px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
        background-color: var(--bg-default);
        `;
      case 3:
        return `
        grid-area: box4;
        border-radius: 8px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
        background-color: var(--bg-default);
        `;
      case 4:
        return `
        grid-area: box5;
        border-radius: 8px;
        background-color: var(--section5BG);
        color: var(--textColorLight);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
        `;
      default:
    }
  }}
`;
export const ProfileInfo = styled.div`
  display: flex;
  height: fit-content;
`;
export const ProfilePic = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid white;
`;
export const InfoContainer = styled.div`
  margin-left: 16px;
  height: fit-content;
`;
export const Name = styled.strong`
  z-index: 1;
  font-size: 1.1em;
`;
export const Position = styled.p`
  opacity: 70%;
`;
export const MainQuote = styled.div``;
export const MainText = styled.h1`
  z-index: 3;
  font-size: 1.1em;
  margin: 16px 0px;
`;
export const FullQuote = styled.div``;
export const SubText = styled.p`
  z-index: 2;
  opacity: 70%;
  font-size: 0.9em;
`;
