import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="my-5">
        <h1
          className="text-center"
          style={{
            fontFamily: "cursive",
          }}
        >
          Hi there welcome to my Portfolio!
        </h1>

        <Hero />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default Home;
