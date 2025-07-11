import "./App.css";

import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NoPage from "./pages/NoPage/NoPage";
import SolutionsForConnectionPage from "./pages/SolutionsForConnectionPage/SolutionsForConnectionPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/solutionForConnection"
          element={<SolutionsForConnectionPage />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
