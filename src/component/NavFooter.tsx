import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Navbar";
import Footer from "./Footer";

const NavFooter = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Nav />
      <div className={pathname !== "/" ? "my-30" : ""}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default NavFooter