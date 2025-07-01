import "./App.css";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import Header from "./components/Header/Header";
import ServisecSection from "./components/ServisecSection/ServisecSection";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
function App() {
  return (
    <>
      <Header></Header>
      <WelcomeSection></WelcomeSection>
      <ServisecSection></ServisecSection>
      <DownloadSection></DownloadSection>
    </>
  );
}

export default App;
