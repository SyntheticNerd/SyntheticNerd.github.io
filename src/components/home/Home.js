import Portfolio from "../portfolio/Portfolio";
import Hero from "../hero/Hero";
import About from "../about/About";
import Contact from "../Contact";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Element as ScrollElement, scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const params = useParams();

  useEffect(() => {
    scroller.scrollTo(params.navigate, {
      duration: 800,
      delay: 0,
      smooth: "ease",
      offset: -64,
    });
  }, [params]);
  return (
    <>
      <ScrollElement name='home'>
        <Hero />
      </ScrollElement>
      <ScrollElement name='about'>
        <About />
      </ScrollElement>
      <ScrollElement name='portfolio'>
        <Portfolio />
      </ScrollElement>
      <ScrollElement name='contact'>
        <Contact />
      </ScrollElement>
    </>
  );
}