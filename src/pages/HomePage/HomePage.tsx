import CompanyNewsSection from "../../components/CompanyNewsSection/CompanyNewsSection";
import DownloadSection from "../../components/DownloadSection/DownloadSection";
import RateSection from "../../components/RateSection/RateSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import SolutionsForConnectionSection from "../../components/SolutionsForConnectionSection/SolutionsForConnectionSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";

const HomePage = () => {
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
