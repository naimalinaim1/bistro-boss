import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">Contact Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/menu">Our Menu</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/order">Our Order</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/signup">Sign UP</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/login">Login</ActiveLink>
      </li>
      <li>
        <p>Sing Out</p>
      </li>
    </>
  );

  return (
    <nav
      className="navbar fixed z-10"
      style={{ background: "rgba(21, 21, 21, 0.5)" }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="space-y-4 dropdown-content text-white mt-3 p-2 shadow  rounded-box w-52"
            style={{ background: "rgba(21, 21, 21, 0.5)" }}
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/">
          <p className="text-4xl font-bold text-white">Bistro Boss</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 px-1 text-white uppercase font-extrabold">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </nav>
  );
};

export default NavBar;
