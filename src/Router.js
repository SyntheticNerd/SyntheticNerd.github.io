import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          {/* Use a slash to denote the home page */}
          <Route index element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path="catagory/:catagoryId" element={<ProductArray />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
