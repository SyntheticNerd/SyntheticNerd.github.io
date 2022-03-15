import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/Contact";
import FourCardFeature from "./components/portfolio/projects/front-end-dev-16/four-card-feature/FourCardFeature";
import ProfileCard1 from "./components/portfolio/projects/front-end-dev-16/profile-card-1/ProfileCard1";
import SinglePriceGrid from "./components/portfolio/projects/front-end-dev-16/single-price-grid/SinglePriceGrid";
import TestimonialGrid from "./components/portfolio/projects/front-end-dev-16/testimonials-grid/TestimonialGrid";
import BaseApparel from "./components/portfolio/projects/front-end-dev-16/base-apperal/BaseApparel";
import HuddlePage from "./components/portfolio/projects/front-end-dev-16/huddle-landing-page/HuddlePage";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          {/* Use a slash to denote the home page */}
          <Route index element={<Home />} />
          <Route path='portfolio/*' element={<Portfolio />}>
            <Route path='fourCardFeature' element={<FourCardFeature />} />
            <Route path='profileCard1' element={<ProfileCard1 />} />
            <Route path='huddleLanding' element={<HuddlePage />} />
            <Route path='singlePriceGrid' element={<SinglePriceGrid />} />
            <Route path='testimonialGrid' element={<TestimonialGrid />} />
            <Route path='baseApparel' element={<BaseApparel />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path="catagory/:catagoryId" element={<ProductArray />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
