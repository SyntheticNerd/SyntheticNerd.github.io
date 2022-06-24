import Portfolio from "../portfolio/Portfolio";
import Hero from "../hero/Hero";
import About from "../about/About";
import Contact from "../Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
