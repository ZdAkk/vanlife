import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <header className="header">
      <NavLink className="site-logo" to="/">
        #VANLIFE
      </NavLink>
      <nav className="header--nav">
        <NavLink
          to={"host"}
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Host
        </NavLink>
        <NavLink
          to={"about"}
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to={"vans"}
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link profile-logo" : "profile-logo"
          }
          to={"login"}
        >
          <CgProfile />
        </NavLink>
      </nav>
    </header>
  );
}
