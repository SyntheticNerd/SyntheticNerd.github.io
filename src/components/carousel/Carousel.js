import React, { useRef } from "react";
import { ArrowBtn } from "../StyledComponents";
import { ReactComponent as BlankIcon } from "../../icons/blankIcon.svg";
import { ReactComponent as ArrowRight } from "../../icons/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../icons/arrowLeft.svg";


export default function Carousel({scrollAmount, children}) {
  const scrollArea = useRef(null);
  const scrollWidth =
    scrollArea.current.offsetWidth * scrollAmount ? scrollAmount / 100 : 1;
  const moveArrRight = () => {
    scrollArea.current.scrollLeft += scrollWidth;
  };
  const moveArrLeft = () => {
    scrollArea.current.scrollLeft -= scrollWidth;
  };
  return (
    <div>
      <ArrowBtn direction='left' onClick={moveArrLeft}>
        <BlankIcon />
        <i>
          <ArrowLeft />
        </i>
      </ArrowBtn>
      <Carousel ref={scrollArea}>
        {children}
      </Carousel>
      <ArrowBtn direction='right' onClick={moveArrRight}>
        <BlankIcon />
        <i>
          <ArrowRight />
        </i>
      </ArrowBtn>
    </div>
  );
}
