import { NavLink } from "react-router-dom";

export default function HostHeader() {
  return (
    <nav className="host-header">
      <NavLink
        to={"."}
        end
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to={"income"}
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Income
      </NavLink>
      <NavLink
        to={"vans"}
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Vans
      </NavLink>
      <NavLink
        to={"reviews"}
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Reviews
      </NavLink>
    </nav>
  );
}
