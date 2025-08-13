import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header1 from "../Components/Header/Header1";

const Layout2 = () => {
  return (
    <div className="main-page-area2">
      <Header1></Header1>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout2;
