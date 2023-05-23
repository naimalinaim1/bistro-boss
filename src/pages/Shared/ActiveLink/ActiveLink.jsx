import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
