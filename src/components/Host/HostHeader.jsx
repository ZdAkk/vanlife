import { NavLink } from "react-router-dom";

export default function HostHeader() {
  return (
    <nav className="host-header">
      <NavLink
        to={"/host"}
        end
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to={"/host/income"}
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Income
      </NavLink>
      <NavLink
        to={"/host/vans"}
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Vans
      </NavLink>
      <NavLink
        to={"/host/reviews"}
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Reviews
      </NavLink>
    </nav>
  );
}
