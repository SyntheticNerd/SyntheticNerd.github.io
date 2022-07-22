import React, { useEffect, useRef } from "react";
import {
  ArrowBtn,
  CarouselContainer,
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
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useCallback } from "react";

const theme = {
  preview: true,
};
//this was the first Carousel I made in this project it was sorta a testing ground for the carousel found throughout the rest of the website
export default function Dev16Carousel({ links }) {
  const scrollArea = useRef(null);
  const { ref, inView, entry } = useInView();
  const [scrollTimeOut, setScrollTimeOut] = useState();

  const autoScroll = useCallback(() => {
    let to = setTimeout(() => {
      if (
        scrollArea.current.scrollLeft + scrollArea.current.offsetWidth >=
        scrollArea.current.scrollWidth
      ) {
        scrollArea.current.scrollLeft = 0;
      } else {
        const scrollWidth = scrollArea.current.offsetWidth * 0.67;
        scrollArea.current.scrollLeft += scrollWidth;
      }
      autoScroll();
    }, 6000);
    setScrollTimeOut(to);
  }, [scrollTimeOut]);

  useEffect(() => {
    if (inView) {
      autoScroll();
    } else if (scrollTimeOut) {
      clearTimeout(scrollTimeOut);
    }
  }, [inView]);

  const handleScrollWheel = () => {
    clearTimeout(scrollTimeOut);
    scrollArea.current.removeEventListener("wheel", handleScrollWheel, true);
    clearTimeout(scrollTimeOut);
    let wheelTime = setTimeout(() => {
      autoScroll();
    }, 12000);
    setScrollTimeOut(wheelTime);
  };

  // useEffect(() => {
  //   scrollArea.current.addEventListener("wheel", handleScrollWheel);
  // });

  //grabs the width of the carousel container and sets a scroll amount based on a fraction of that width.
  const moveArrRight = () => {
    const scrollWidth = scrollArea.current.offsetWidth * 0.67;
    scrollArea.current.scrollLeft += scrollWidth;
    clearTimeout(scrollTimeOut);
    let to = setTimeout(() => {
      autoScroll();
    }, 12000);
    setScrollTimeOut(to);
  };
  const moveArrLeft = () => {
    const scrollWidth = scrollArea.current.offsetWidth * 0.67;
    scrollArea.current.scrollLeft -= scrollWidth;
    clearTimeout(scrollTimeOut);
    let to = setTimeout(() => {
      autoScroll();
    }, 12000);
    setScrollTimeOut(to);
  };
  return (
    <CarouselContainer ref={ref} onWheel={handleScrollWheel}>
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
    </CarouselContainer>
  );
}
