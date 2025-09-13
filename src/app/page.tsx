
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Presentation from "./components/sections/Presentation";
import Expertise from "./components/sections/Expertise";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Pricings from "./components/sections/Pricings";
import Companys from "./components/sections/Companys";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

import "../../src/app/globals.css";

export default function Home() {
  return (
    <div className="pt-16">
      <Header />
      <Hero />
      {/* <Presentation /> */}
      <Expertise />
      {/* <Skills /> */}
      <Pricings />
      <Projects />
      {/* <Companys /> */}
      {/* <Resume /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
