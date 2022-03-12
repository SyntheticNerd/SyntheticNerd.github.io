import { NavLink } from "react-router-dom";
import {
  Carousel,
  LgCard,
  FullPreview,
  LinkText,
} from "../../../StyledComponents";
import SinglePriceGrid from "./single-price-grid/SinglePriceGrid";
import ProfileCard1 from "./profile-card-1/ProfileCard1";
import FourCardFeature from "./four-card-feature/FourCardFeature";
import TestimonialGrid from "./testimonials-grid/TestimonialGrid";
import BaseApparel from "./base-apperal/BaseApparel";
import { ThemeProvider } from "styled-components";

// const linkStyle = {
//   height: "100%",
//   width: "100%",
//   backgroundColor: "blue",
// };

const links = [
  {
    name: "Single Price Grid",
    path: "singlePriceGrid",
    component: <SinglePriceGrid />,
    scale: 0.3,
  },
  {
    name: "Four Card Feature",
    path: "fourCardFeature",
    component: <FourCardFeature />,
    scale: 0.2,
  },
  {
    name: "Base Apparel",
    path: "baseApparel",
    component: <BaseApparel />,
    scale: 0.19,
  },
  {
    name: "Profile Card",
    path: "profileCard1",
    component: <ProfileCard1 />,
    scale: 0.3,
  },
  {
    name: "Testimonial's Grid",
    path: "testimonialsGrid",
    component: <TestimonialGrid />,
    scale: 0.3,
  },
];

const theme = {
  preview: true,
};

export default function FrontEndDev() {
  return (
    <>
      <Carousel>
        {links.map((link, index) => (
          <NavLink key={index} to={link.path} exact activeClassName='current'>
            <LinkText>{link.name}</LinkText>
            <LgCard>
              <FullPreview scale={link.scale}>
                <ThemeProvider theme={theme}>{link.component}</ThemeProvider>
              </FullPreview>
            </LgCard>
          </NavLink>
        ))}
      </Carousel>
    </>
  );
}
