import {
  BrowserRouter as Router,
  Routes,
  Route,
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
          <Route exact path='/portfolio/' element={<Portfolio />}>
            <Route exact path='/portfolio/fourCardFeature' element={<FourCardFeature />} />
            <Route exact path='/portfolio/profileCard1' element={<ProfileCard1 />} />
            <Route exact path='/portfolio/huddleLanding' element={<HuddlePage />} />
            <Route exact path='/portfolio/singlePriceGrid' element={<SinglePriceGrid />} />
            <Route exact path='/portfolio/testimonialGrid' element={<TestimonialGrid />} />
            <Route exact path='/portfolio/baseApparel' element={<BaseApparel />} />
          </Route>
          <Route exact path='about' element={<About />} />
          <Route exact path='contact' element={<Contact />} />
          {/* <Route path="catagory/:catagoryId" element={<ProductArray />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
