import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LgCard,
  FullPreview,
  LinkText,
  ArrowBtn,
  TagBox,
  Tag,
  SectionTitle,
  Goldh1,
  CarouselList,
} from "../../../StyledComponents";
import SinglePriceGrid from "./single-price-grid/SinglePriceGrid";
import ProfileCard1 from "./profile-card-1/ProfileCard1";
import FourCardFeature from "./four-card-feature/FourCardFeature";
import TestimonialGrid from "./testimonials-grid/TestimonialGrid";
import HuddlePage from "./huddle-landing-page/HuddlePage";
import BaseApparel from "./base-apparel/BaseApparel";
import { ThemeProvider } from "styled-components";
import React from "react";
import SignUpApp from "./sign-up-form-main/SignUpApp";
import Modal from "../../../modal/Modal";
import Dev16Carousel from "./Dev16Carousel";

// const linkStyle = {
//   height: "100%",
//   width: "100%",
//   backgroundColor: "blue",
// };

const links = [
  {
    name: "Sign Up Landing",
    path: "signUpLanding",
    component: <SignUpApp />,
    scale: 0.19,
    tags: ["Custom CSS Art", "Mobile Friendly"],
  },
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

export default function FrontEndDev({ setModal, modal, projectId }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (projectId) {
      const _project = links.find((project) => {
        return project.path === projectId;
      });
      console.log(_project.component);
      _project && setSelected(_project.component);
    }
  }, [projectId]);

  return (
    <>
      <SectionTitle style={{ width: "80%", margin: "auto" }}>
        <Goldh1>FRONT END MENTOR CHALLENGES</Goldh1>
      </SectionTitle>
      <Dev16Carousel links={links} />
      <Modal modal={modal} setModal={setModal} top="64px" height="calc(100vh-64px)">
        {selected && selected}
      </Modal>
    </>
  );
}
