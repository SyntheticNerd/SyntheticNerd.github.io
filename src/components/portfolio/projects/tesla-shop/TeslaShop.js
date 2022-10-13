import React from "react";
import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../../../icons/gitHubIcon.svg";

const TeslaShopFrame = styled.iframe`
  height: 125%;
  width: 125%;
  border: none;
  -ms-zoom: 0.8;
  -moz-transform: scale(0.8);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.8);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.8);
  -webkit-transform-origin: 0 0;
`;

export const teslaInfo = (
  <>
    <h1>Shop Tesla Recreation</h1>
    <p>
      One of my first real group projects during my apprenticeship. We were
      given the task of recreating a single-page/multi-page application in 8
      days. My team chose the{" "}
      <a href='https://shop.tesla.com/'>Shop Tesla Website</a> <br />
      <br /> It was an amazing experience. I was responsible for the navigation,
      router, cart page and a Redux store for managing a pseudo cart.
      <br />
      <br />I worked closely with my team on designing our data structure and
      developing the algorithm to decipher said data structure and display all
      the appropriate info on the product pages.
    </p>
    <h2>Built with</h2>
    <ul>
      <li>React</li>
      <li>Styled Components</li>
      <li>React Responsive Carousel</li>
      <li>React Scroll</li>
      <li>Redux(redux/toolkit)</li>
    </ul>
    <h2>
      <a href='https://syntheticnerd.github.io/tesla-group-project/'>
        Click here to see the full website
      </a>
    </h2>
    <a href=""></a>
    <GithubIcon />
  </>
);

export default function KAConstruction() {
  return (
    <TeslaShopFrame
      title='test'
      src='https://syntheticnerd.github.io/tesla-group-project/'
      id='teslaShopFrame'
    />
  );
}
