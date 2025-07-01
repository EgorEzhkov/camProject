import "./App.css";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import Header from "./components/Header/Header";
import RateSection from "./components/RateSection/RateSection";
import ServisecSection from "./components/ServisecSection/ServisecSection";
import SolutionsForConnectionSection from "./components/SolutionsForConnectionSection/SolutionsForConnectionSection";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
function App() {
  return (
    <>
      <Header></Header>
      <WelcomeSection></WelcomeSection>
      <ServisecSection></ServisecSection>
      <DownloadSection></DownloadSection>
      <RateSection></RateSection>
      <SolutionsForConnectionSection></SolutionsForConnectionSection>
    </>
  );
}

export default App;
