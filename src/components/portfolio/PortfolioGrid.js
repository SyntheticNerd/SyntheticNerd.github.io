import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import {
  GridContainer1,
  GridContainer1A,
  GridContainer2,
  GridContainer3,
  GridContainer4,
  GridContainer5,
  GridContainer6,
  PortfolioGridContainer,
} from "./PortfolioStyles";

import Magic8Ball from "./projects/magic-8-ball/Magic8Ball";
import TetrisProject from "./projects/tetris/TetrisProject";
import ReactStoreApi from "./projects/react-store-api/ReactStoreApi";
import KAConstruction, {
  kaConstructionInfo,
} from "./projects/ka-construction/KAConstruction";
import SteamClone from "./projects/steam-clone/SteamClone";
import Dngn from "./projects/dngn-bynder/Dngn";
import TeslaShop, { teslaInfo } from "./projects/tesla-shop/TeslaShop";

const showInfoHelp = keyframes`
  10%{
    opacity: 1;
  }
  90%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const animateMixin = css`
  animation: ${showInfoHelp} 6s linear 1;
`;

const InformationWrap = styled.div`
  position: relative;
  img {
    z-index: 4;
    height: 60%;
    width: 60%;
    pointer-events: none;
  }
  & button {
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
  }
  .portfolio-info-helper {
    position: absolute;
    background-image: var(--gold-gradient);
    height: fit-content;
    width: 200px;
    color: white;
    z-index: 0;
    display: grid;
    place-items: center;
    padding: 16px;
    right: -19px;
    top: -20px;
    transform: translateY(-100%);
    box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.8);
    font-weight: 700;
    opacity: 0;
    pointer-events: none;
    ${({ animateHelp }) => animateHelp && animateMixin};
    &::before {
      content: "";
      height: calc(100% - 4px);
      width: calc(100% - 4px);
      top: 2px;
      left: 2px;
      position: absolute;
      z-index: -1;
      background-color: var(--elevation5);
    }
    &::after {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      background-color: var(--elevation5);
      transform: rotate(45deg);
      right: 32px;
      bottom: -10px;
      border-bottom: 2px solid #aa771c;
      border-right: 2px solid #aa771c;
    }
  }
  .grid-info-container {
    overflow-y: scroll;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    backdrop-filter: blur(8px);
    opacity: ${({ openInfo }) => (openInfo ? "1" : "0")};
    pointer-events: ${({ openInfo }) => (openInfo ? "auto" : "none")};
    text-align: left;
    padding: 16px;
    .info-grid-close-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      right: 8px;
      top: 8px;
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
    }
    a {
      background: var(--gold-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-decoration: underline;
      text-decoration-color: white;
    }
    ul {
      padding-left: 16px;
    }
  }
`;

export default function PortfolioGrid() {
  const InformationProvider = ({ infoComponent, children }) => {
    const frameRef = useRef();
    const [wasDrag, setWasDrag] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const [animateHelp, setAnimateHelp] = useState(false);
    const [toId, setToId] = useState();

    const handleMouseOver = () => {
      if (
        !window.sessionStorage.getItem("gridFirstMouseOver") &&
        infoComponent
      ) {
        const timer = setTimeout(() => {
          setAnimateHelp(true);
          window.sessionStorage.setItem("gridFirstMouseOver", true);
        }, 2000);
        setToId(timer);
        console.log(timer);
      } else {
        setAnimateHelp(false);
      }
      return () => clearTimeout(toId);
    };

    const handleClick = () => {
      if (wasDrag) {
        setWasDrag(false);
      } else {
        setOpenInfo(true);
      }
    };
    return (
      <InformationWrap
        ref={frameRef}
        style={{ height: "100%", width: "100%" }}
        animateHelp={animateHelp}
        onMouseOver={handleMouseOver}
        onMouseLeave={() => {
          if (toId) {
            clearTimeout(toId);
          }
        }}
        openInfo={openInfo}
        wasDrag={wasDrag}
      >
        {infoComponent && (
          <>
            <div className='grid-info-container'>
              <button
                className='info-grid-close-btn'
                onClick={() => setOpenInfo(false)}
              >
                <div className='line1'></div>
                <div className='line2'></div>
              </button>
              {infoComponent}
            </div>
            
            <motion.button
              drag
              dragConstraints={frameRef}
              onMouseUp={handleClick}
              onDrag={() => setWasDrag(true)}
              dragMomentum={false}
              snapToCursor={true}
              className='portfolio-info-btn'
              dragPropagation
            >
              <div className='portfolio-info-helper'>
                If I am in your way you can drag me somewhere else
              </div>
              <img
                src={process.env.PUBLIC_URL + "/icons/info-icon.svg"}
                alt=''
              />
            </motion.button>
          </>
        )}
        {children}
      </InformationWrap>
    );
  };

  return (
    <PortfolioGridContainer>
      <GridContainer1A>
        <InformationProvider infoComponent={teslaInfo}>
          <TeslaShop />
        </InformationProvider>
      </GridContainer1A>
      <GridContainer1>
        <InformationProvider infoComponent={kaConstructionInfo}>
          <KAConstruction />
        </InformationProvider>
      </GridContainer1>
      <GridContainer2>
        <InformationProvider>
          <TetrisProject />
        </InformationProvider>
      </GridContainer2>
      <GridContainer3>
        <InformationProvider>
          <ReactStoreApi />
        </InformationProvider>
      </GridContainer3>
      <GridContainer4>
        <InformationProvider>
          <Dngn />
        </InformationProvider>
      </GridContainer4>
      <GridContainer5>
        <InformationProvider>
          <Magic8Ball />
        </InformationProvider>
      </GridContainer5>
      <GridContainer6>
        <InformationProvider>
          <SteamClone />
        </InformationProvider>
      </GridContainer6>
    </PortfolioGridContainer>
  );
}
