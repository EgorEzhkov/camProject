import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollManager from "../utils/ScrollManager";

const MainLayout = () => {
  return (
    <>
      <ScrollManager />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
