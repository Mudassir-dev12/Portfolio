import React from "react";
import "./index.css";
import Nav from "./components/navbar";
import Hero from "./components/front_page";
import Skills from "./components/skills";
import Project from "./components/project";
import Footer from "./components/footer";
import Mousefollower from "./components/mousefollower";

const App = () => {
  return (
    <div className='pt-20 md:pt-0 bg-[#020617]'>
      <Nav />
      <section id='home'>
        <Hero />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='projects'>
        <Project />
      </section>
      <Footer />
      <Mousefollower />
    </div>
  );
};

export default App;
