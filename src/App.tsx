import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NoPage from "./pages/NoPage/NoPage";
import SolutionsForConnectionPage from "./pages/SolutionsForConnectionPage/SolutionsForConnectionPage";
import MainLayout from "./layouts/MainLayout";
import NoLayout from "./layouts/NoLayout";
import CompanyNewsPage from "./pages/CompanyNewsPage/CompanyNewsPage";
import { useAuthCheck } from "./hooks/useAuthCheck";

function App() {
  useAuthCheck();
  return (
    <HashRouter>
      <Routes>
        {/* Layout с Header и Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/solutionForConnection"
            element={<SolutionsForConnectionPage />}
          />
          <Route path="/companyNewsPage" element={<CompanyNewsPage />}></Route>
        </Route>

        {/* Layout без Header и Footer */}
        <Route element={<NoLayout />}>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
