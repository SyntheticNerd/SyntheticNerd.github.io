import { useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Carousel,
  LgCard,
  FullPreview,
  LinkText,
  ArrowBtn,
  TagBox,
  Tag,
  SectionTitle,
  Goldh1,
} from "../../../StyledComponents";
import SinglePriceGrid from "./single-price-grid/SinglePriceGrid";
import ProfileCard1 from "./profile-card-1/ProfileCard1";
import FourCardFeature from "./four-card-feature/FourCardFeature";
import TestimonialGrid from "./testimonials-grid/TestimonialGrid";
import HuddlePage from "./huddle-landing-page/HuddlePage";
import BaseApparel from "./base-apperal/BaseApparel";
import { ThemeProvider } from "styled-components";
import { ReactComponent as BlankIcon } from "../../../../icons/blankIcon.svg";
import { ReactComponent as ArrowRight } from "../../../../icons/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../../../icons/arrowLeft.svg";
import React from "react";

// const linkStyle = {
//   height: "100%",
//   width: "100%",
//   backgroundColor: "blue",
// };

const links = [
  {
    name: "Huddle Landing",
    path: "huddleLanding",
    component: <HuddlePage />,
    scale: 0.22,
    tags: ["Custom CSS Art", "Mobile Friendly"],
  },
  {
    name: "Base Apparel",
    path: "baseApparel",
    component: <BaseApparel />,
    scale: 0.2,
    tags: ["Interactive", "Mobile Friendly"],
  },
  {
    name: "Testimonial's Grid",
    path: "testimonialGrid",
    component: <TestimonialGrid />,
    scale: 0.2,
    tags: ["CSS Grid", "Mobile Friendly", "Context API"],
  },
  {
    name: "Four Card Feature",
    path: "fourCardFeature",
    component: <FourCardFeature />,
    scale: 0.2,
    tags: ["Dark Theme", "Interactive", "Mobile Friendly"],
  },
  {
    name: "Single Price Grid",
    path: "singlePriceGrid",
    component: <SinglePriceGrid />,
    scale: 0.3,
    tags: ["Dark Theme", "Mobile Friendly"],
  },
  {
    name: "Profile Card",
    path: "profileCard1",
    component: <ProfileCard1 />,
    scale: 0.3,
    tags: [],
  },
];

const theme = {
  preview: true,
};

export default function FrontEndDev() {
  const scrollArea = useRef(null);
  const moveArrRight = () => {
    const scrollWidth = scrollArea.current.offsetWidth * 0.67;
    scrollArea.current.scrollLeft += scrollWidth;
  };
  const moveArrLeft = () => {
    const scrollWidth = scrollArea.current.offsetWidth * 0.67;
    scrollArea.current.scrollLeft -= scrollWidth;
  };
  return (
    <div>
      <SectionTitle><Goldh1>FRONT END MENTOR CHALLENGES</Goldh1></SectionTitle>
      <div style={{ position: "relative" }}>
        <ArrowBtn direction='left' onClick={moveArrLeft}>
          <BlankIcon />
          <i>
            <ArrowLeft />
          </i>
        </ArrowBtn>
        <Carousel ref={scrollArea}>
          {links.map((link, index) => (
            <NavLink key={index} to={link.path}>
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
            </NavLink>
          ))}
        </Carousel>
        <ArrowBtn direction='right' onClick={moveArrRight}>
          <BlankIcon />
          <i>
            <ArrowRight />
          </i>
        </ArrowBtn>
      </div>
    </div>
  );
}
