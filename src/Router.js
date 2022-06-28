import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/Contact";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route exact path=':navigate' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
