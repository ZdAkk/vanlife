import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function HostVanHeader() {
  return (
    <nav className="host-van-header">
      <NavLink
        to={`.`}
        end
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Details
      </NavLink>
      <NavLink
        to={`pricing`}
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Pricing
      </NavLink>
      <NavLink
        to={`photos`}
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
