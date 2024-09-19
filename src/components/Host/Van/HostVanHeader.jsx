import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function HostVanHeader({ vanId }) {
  return (
    <nav className="host-van-header">
      <NavLink
        to={`/host/vans/${vanId}`}
        end
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Details
      </NavLink>
      <NavLink
        to={`/host/vans/${vanId}/pricing`}
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Pricing
      </NavLink>
      <NavLink
        to={`/host/vans/${vanId}/photos`}
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Photos
      </NavLink>
    </nav>
  );
}

HostVanHeader.propTypes = {
  vanId: PropTypes.string,
};
