import React, { useRef, useState } from "react";
import { ArrowBtn } from "../StyledComponents";
import { ReactComponent as BlankIcon } from "../../icons/blankIcon.svg";
import { ReactComponent as ArrowRight } from "../../icons/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../icons/arrowLeft.svg";
import { CarouselList, CarouselWrapper } from "./CarouselStyle";
import { Link } from "react-router-dom";

export default function Carousel({ scrollAmount, children, width, childWidth }) {
  const [scrollAmnt, setScrollAmnt] = useState(scrollAmount?scrollAmount:400)
  const scrollArea = useRef(null);
  const moveArrRight = () => {
    const scrollWidth =
      scrollArea.current.offsetWidth * scrollAmnt
        ? scrollAmnt
        : scrollArea.current.offsetWidth;
    scrollArea.current.scrollLeft += scrollWidth;
  };
  const moveArrLeft = () => {
    const scrollWidth =
      scrollArea.current.offsetWidth * scrollAmnt
        ? scrollAmnt
        : scrollArea.current.offsetWidth;
    scrollArea.current.scrollLeft -= scrollWidth;
  };
  return (
    <CarouselWrapper width={width} childWidth={childWidth}>
      <ArrowBtn direction='left' onClick={moveArrLeft}>
        <BlankIcon />
        <i>
          <ArrowLeft />
        </i>
      </ArrowBtn>
      <ul ref={scrollArea}>
        {children &&
          children.map((child, index) => (
            <li key={index}>
              <Link to='/'>{child}</Link>
            </li>
          ))}
        {/* {children[0]} */}
      </ul>
      <ArrowBtn direction='right' onClick={moveArrRight}>
        <BlankIcon />
        <i>
          <ArrowRight />
        </i>
      </ArrowBtn>
    </CarouselWrapper>
  );
}
