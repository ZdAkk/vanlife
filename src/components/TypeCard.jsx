import classNames from "classnames/bind";
import PropTypes from "prop-types";

export default function TypeCard({ type, children, className, ...otherProps }) {
  function typeToColorMapper(type) {
    return type === "simple"
      ? "orange"
      : type === "rugged"
      ? "swamp"
      : type === "luxury"
      ? "black"
      : "";
  }

  const finalClassName = classNames(
    "type-card",
    type && `type-card-${typeToColorMapper(type)}`,
    className
  );

  return (
    <div className={finalClassName} {...otherProps}>
      {children}
    </div>
  );
}

TypeCard.propTypes = {
  type: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
};
