import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const onHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <>
      {onHeaderFooter || <NavBar />}
      <Outlet />
      {onHeaderFooter || <Footer />}
    </>
  );
};

export default Main;
