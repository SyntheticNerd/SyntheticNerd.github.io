import styled from "styled-components";

export const PortfolioPage = styled.div`
  padding: 64px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ modal }) => modal && `overflow: hidden;`}
`;

export const PortfolioGridContainer = styled.div`
  display: grid;
  gap: 64px;
  width: 90%;
  z-index: 1;
  position: relative;
  margin-bottom: 64px;

  grid-template-columns: 100%;
  grid-template-rows: 140vw 60vw 60vw 180vw 140vw 120vw 120vw;
  grid-template-areas:
    "ts"
    "ka"
    "sc"
    "te"
    "eb"
    "dg"
    "st";

  @media (min-width: 490px) {
    grid-template-columns: 100%;
    grid-template-rows: 80vh 40vw 40vw 80vw 120vw 120vw 120vw;
    grid-template-areas:
      "ts"
      "ka"
      "sc"
      "te"
      "eb"
      "dg"
      "st";
  }

  @media (min-width: 750px) {
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(19, 13vw);
    grid-template-areas:
      "ts ts ts ts ts ts"
      "ts ts ts ts ts ts"
      "ts ts ts ts ts ts"
      "ts ts ts ts ts ts"
      "ka ka ka ka ka ka"
      "ka ka ka ka ka ka"
      "ka ka ka ka ka ka"
      "sc sc sc sc sc sc"
      "sc sc sc sc sc sc"
      "sc sc sc sc sc sc"
      "eb eb eb dg dg dg"
      "eb eb eb dg dg dg"
      "eb eb eb dg dg dg"
      "eb eb eb dg dg dg"
      "te te te te st st"
      "te te te te st st"
      "te te te te st st"
      "te te te te st st";
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(14, 13vw);
    grid-template-areas:
      "ts ts ts ts ts ts"
      "ts ts ts ts ts ts"
      "ts ts ts ts ts ts"
      "ka ka ka ka ka ka"
      "ka ka ka ka ka ka"
      "ka ka ka ka ka ka"
      "sc sc sc sc sc sc"
      "sc sc sc sc sc sc"
      "sc sc sc sc sc sc"
      "eb eb dg dg te te"
      "eb eb dg dg te te"
      "eb eb dg dg te te"
      "st st st st . ."
      "st st st st . .";
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(11, 13vw);
    grid-template-areas:
      "ts ts ts ts ts ts"
      "ts ts ts ts ts ts"
      "ts ts ts ts ts ts"
      "ka ka ka ka te te"
      "ka ka ka ka te te"
      "sc sc sc sc te te"
      "sc sc sc sc st st"
      "eb eb dg dg st st"
      "eb eb dg dg st st"
      "eb eb dg dg . .";
  }

  @media (min-width: 1600px) {
    grid-template-areas:
      "ts ts ts ts ts ts ts"
      "ts ts ts ts ts ts ts"
      "ts ts ts ts ts ts ts"
      "ka ka ka ka te te te"
      "ka ka ka ka te te te"
      "ka ka ka ka te te te"
      "st st st sc sc sc sc"
      "st st st sc sc sc sc"
      "st st st dg dg eb eb"
      ". . . dg dg eb eb"
      ". . . dg dg eb eb";
    grid-template-columns: repeat(7, auto);
    grid-template-rows: repeat(11, 10vw);
  }
`;

export const GridContainer1A = styled.div`
  position: relative;
  grid-area: ts;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
export const GridContainer1 = styled.div`
  position: relative;
  grid-area: ka;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
export const GridContainer2 = styled.div`
  grid-area: te;
  position: relative;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
export const GridContainer3 = styled.div`
  grid-area: st;
  position: relative;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
export const GridContainer4 = styled.div`
  grid-area: dg;
  position: relative;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
export const GridContainer5 = styled.div`
  grid-area: eb;
  position: relative;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
export const GridContainer6 = styled.div`
  grid-area: sc;
  position: relative;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
