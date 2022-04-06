import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  height: fit-content;
  width: ${({ width }) => (width ? width : "100%")};
  & > ul {
    list-style-type: none;
    display: flex;
    width: 100%;
    padding: 0px 68px;
    overflow-x: scroll;
    /* overflow-y: initial; */
    scroll-behavior: smooth;
    transition: all 0.6s ease;
    gap: 80px;
    @media (max-width: 520px) {
      padding: 0px 0px;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    & > li {
      /* position: relative; */
      min-width: calc(
        ${({ childWidth }) => (childWidth ? childWidth : `100%`)}
      );
      /* &:before {
        content: "";
        background: radial-gradient(
          50% 50% at 50% 50%,
          rgba(0, 0, 0, 0.39) 0%,
          rgba(0, 0, 0, 0) 94.79%
        );
        height: 12%;
        width: 100%;
        position: absolute;
        bottom: -50px;
        left: 0px;
        border-radius: 50%;
        transform: perspective(1em) rotateX(10deg) scale(0.8);
      } */
      @media (max-width: 520px) {
        -webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
        -o-transform: scale(0.8);
        transform: scale(0.8);
        /* margin: 0px -40px; */
        min-width: calc(
          ${({ childWidth }) => (childWidth ? childWidth : `100%`)}
        );
      }
      & > a {
        text-decoration: none;
        color: white;
        position: relative;
        width: 100%;
      }
    }
  }
`;
