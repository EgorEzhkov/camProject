import { useLocation } from "react-router-dom";
import CompanyNewsSection from "../../components/CompanyNewsSection/CompanyNewsSection";
import DownloadSection from "../../components/DownloadSection/DownloadSection";
import RateSection from "../../components/RateSection/RateSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import SolutionsForConnectionSection from "../../components/SolutionsForConnectionSection/SolutionsForConnectionSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "services") {
      const servicesSection = document.getElementById("servicesSection");
      servicesSection?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.state?.scrollTo === "rate") {
      const rateSection = document.getElementById("rateSection");
      rateSection?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.state?.scrollTo === "solutionsForConnection") {
      const solutionsForConnectionSection = document.getElementById(
        "solutionsForConnection"
      );
      solutionsForConnectionSection?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.state?.scrollTo === "companyNews") {
      const companyNewsSection = document.getElementById("companyNewsSection");
      companyNewsSection?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <>
      <WelcomeSection></WelcomeSection>
      <ServicesSection></ServicesSection>
      <DownloadSection></DownloadSection>
      <RateSection></RateSection>
      <SolutionsForConnectionSection></SolutionsForConnectionSection>
      <CompanyNewsSection></CompanyNewsSection>
    </>
  );
};

export default HomePage;
