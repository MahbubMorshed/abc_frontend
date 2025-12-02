import React from "react";
import HomeJournalSection from "./HomeJournalSection";
import HomeAdvisorySection from "./HomeAdvisorySection";
import HomeServicesSection from "./HomeServiceSection";
import HomeCfpSection from "./HomeCfpSection";
import HomeBlogSection from "./HomeBlogSection";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";

import LeadersInInnovation from "./LeadersInInnovation";
import ContactPage from "./Contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <LeadersInInnovation />
      <ContactPage />
      <HomeJournalSection />
      <HomeAdvisorySection />
      <HomeServicesSection />
      <HomeCfpSection />
      <HomeBlogSection />
    </div>
  );
};

export default Home;
