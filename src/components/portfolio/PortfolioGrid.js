import React from "react";
import Magic8Ball from "./projects/magic-8-ball/Magic8Ball";
import TetrisProject from "./projects/tetris/TetrisProject";

import styled from "styled-components";
import ReactStoreApi from "./projects/react-store-api/ReactStoreApi";
import KAConstruction from "./projects/ka-construction/KAConstruction";
import SteamClone from "./projects/steam-clone/SteamClone";
import Dngn from "./projects/dngn-bynder/Dngn";

const PortfolioGridContainer = styled.div`
  display: grid;

  gap: 24px;
  margin: auto;
  width: min-content;
  z-index: 1;
  position: relative;

  grid-template-columns: repeat(5, 13vw);
  grid-template-rows: repeat(10, 12vw);

    grid-template-areas:
      "ka ka ka ka ka"
      "ka ka ka ka ka"
      "ka ka ka ka ka"
      "eb eb eb dg dg"
      "eb eb eb dg dg"
      "eb eb eb dg dg"
      "eb eb eb dg dg"
      ". . st st st"
      ". . st st st"
      ". . st st st";

  @media (min-width: 1600px) {
    grid-template-areas:
      "ka ka ka ka te te te"
      "ka ka ka ka te te te"
      "st st st sc sc sc sc"
      "st st st sc sc sc sc"
      "st st st dg dg eb eb"
      "st st st dg dg eb eb"
      "st st st dg dg eb eb";
    grid-template-columns: repeat(7, 10vw);
    grid-template-rows: repeat(7, 10vw);

    gap: 24px;
  }
`;

const GridContainer1 = styled.div`
  position: relative;
  /* grid-column: 1 / 5;
  grid-row: 1 / 3; */
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
const GridContainer2 = styled.div`
  /* grid-column: 5 / 8;
  grid-row: 1 / 3; */
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
const GridContainer3 = styled.div`
  /* grid-column: 1 / 4;
  grid-row: 3 / 8; */
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
const GridContainer4 = styled.div`
  /* grid-column: 4 / 6;
  grid-row: 3 / 6; */
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
const GridContainer5 = styled.div`
  /* grid-column: 6 / 8;
  grid-row: 3 / 6; */
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
const GridContainer6 = styled.div`
  /* grid-column: 4 / 8;
  grid-row: 6 / 8; */
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

export default function PortfolioGrid() {
  return (
    <PortfolioGridContainer>
      <GridContainer1>
        <KAConstruction />
      </GridContainer1>
      <GridContainer2>
        <TetrisProject />
      </GridContainer2>
      <GridContainer3>
        <ReactStoreApi />
      </GridContainer3>
      <GridContainer4>
        <Dngn />
      </GridContainer4>
      <GridContainer5>
        <Magic8Ball />
      </GridContainer5>
      <GridContainer6>
        <SteamClone />
      </GridContainer6>
    </PortfolioGridContainer>
  );
}
