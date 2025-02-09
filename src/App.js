// App.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Component/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./Component/Footer";
import BenefitsSection from "./Component/BenefitsSection";
import BannerSection from "./Component/Banner";
import ServicesSection from "./Component/ServicesSection";
import TextPath from "./Component/TextPath";
import CounterSection from "./Component/CounterSection";
import ScrollToTop from "./Component/ScrollToTop";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <BannerSection />
      <BenefitsSection />
      <ServicesSection />
      <ScrollToTop/>
      <div className="p-10">
      <TextPath/>
      </div>
      <CounterSection/>
      <Footer />
    </div>
  );
}

export default App;
