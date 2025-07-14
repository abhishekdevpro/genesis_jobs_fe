import React from "react";
import Builder from "./builder";
import Loder from "./Loder";

import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import Hero from "../components/Landing/HeroSection";
import Steps from "../components/Landing/Steps";
import InterviewComparison from "../components/Landing/InterviewComparison";
import CoverLetterSlider from "../components/Landing/CoverLetterSlider";
import ResumeSlider from "../components/Landing/ResumeSlider";
import ArticleBlogSection from "../components/Landing/Blogs";
import FAQ from "../components/Landing/FaqSection";
import PricingComponent from "../components/Landing/PricingPlan";
// import Footer from "./Footer/Footer.jsx"
// import Navbar from "./Navbar/Navbar";


const ResumeBuilder = () => {
  return (
    <>
      {/* <Builder /> */}
      <Navbar />
      <Hero />
      <Steps />
      <InterviewComparison />
      <ResumeSlider />
      <CoverLetterSlider />
      <PricingComponent />
      <ArticleBlogSection />
      <FAQ />
      {/* <Home_first /> */}
      {/* <FAQ /> */}
      {/* <Loder/> */}
      <Footer />
      {/* <Footer /> */}
    </>
  );
};

export default ResumeBuilder;
