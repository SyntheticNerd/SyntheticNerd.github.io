import React, { useRef } from "react";
import {
  ArrowBtn,
  CarouselList,
  FullPreview,
  LgCard,
  LinkText,
  Tag,
  TagBox,
} from "../../../StyledComponents";
import { ReactComponent as BlankIcon } from "../../../../icons/blankIcon.svg";
import { ReactComponent as ArrowRight } from "../../../../icons/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../../../icons/arrowLeft.svg";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  preview: true,
};
//this was the first Carousel I made in this project it was sorta a testing ground for the carousel found throughout the rest of the website
export default function Dev16Carousel({ links }) {
  const scrollArea = useRef(null);
  //grabs the width of the carousel container and sets a scroll amount based on a fraction of that width.
  const moveArrRight = () => {
    const scrollWidth = scrollArea.current.offsetWidth * 0.67;
    scrollArea.current.scrollLeft += scrollWidth;
  };
  const moveArrLeft = () => {
    const scrollWidth = scrollArea.current.offsetWidth * 0.67;
    scrollArea.current.scrollLeft -= scrollWidth;
  };
  return (
    <div style={{ position: "relative" }}>
      <ArrowBtn direction='left' onClick={moveArrLeft}>
        <BlankIcon />
        <i>
          <ArrowLeft />
        </i>
      </ArrowBtn>
      <CarouselList ref={scrollArea}>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={`/portfolio/${link.path}`}
            // onClick={onClick}
          >
            <LinkText>{link.name}</LinkText>
            <TagBox>
              {link.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagBox>
            <LgCard>
              <FullPreview scale={link.scale}>
                <ThemeProvider theme={theme}>{link.component}</ThemeProvider>
              </FullPreview>
            </LgCard>
            {/* The way I create the thumbnails is a little unorthodox. Rather than use an image I opted for shrinking the actual component down and using condition styled components to render the proper scales and size. This is a bit overkill but served as a good learning experience. */}
          </NavLink>
        ))}
      </CarouselList>
      <ArrowBtn direction='right' onClick={moveArrRight}>
        <BlankIcon />
        <i>
          <ArrowRight />
        </i>
      </ArrowBtn>
    </div>
  );
}
