import React from "react";
import HomeJournalSection from "./HomeJournalSection";
import HomeAdvisorySection from "./HomeAdvisorySection";
import HomeServicesSection from "./HomeServiceSection";
import HomeCfpSection from "./HomeCfpSection";
import HomeBlogSection from "./HomeBlogSection";

const Home = () => {
  return (
    <div>
      <HomeJournalSection />
      <HomeAdvisorySection />
      <HomeServicesSection />
      <HomeCfpSection />
      <HomeBlogSection />
    </div>
  );
};

export default Home;
