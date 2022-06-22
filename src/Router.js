import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./components/home/Home";
import About from "./components/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/Contact";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route exact path='/portfolio/' element={<Portfolio />} />
          <Route exact path='/portfolio/:projectId' element={<Portfolio />}/>
          <Route exact path='about' element={<About />} />
          <Route exact path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
