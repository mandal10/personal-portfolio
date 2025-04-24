import React from "react";
import Navbar from "./components/navbar/Navbar";
import Features from "./components/features/Features";
import Banner from "./components/banner/Banner";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom"

function App() {
  return (
    <div className="max-w-full h-auto bg-bodycolor text-lightcolor font-bodyfont">
      <div className="max-w-screen-xl mx-auto ">
        <Navbar />
        <Banner />
        <Features />
        <Project />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />

      </div>
    </div>
  );
}

export default App;
