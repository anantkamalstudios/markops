import { Outlet } from "react-router-dom";
import Header1 from "../Components/Header/Header1";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

const Main = () => {
  return (
    <div className="main-page-area">
      <ScrollToTop></ScrollToTop>
      <Header1></Header1>
      <div className="cs_site_header_spacing_140"></div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
