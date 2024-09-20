import classNames from "classnames/bind";
import PropTypes from "prop-types";

export default function Button({ color, children, className, ...otherProps }) {
  const finalClassName = classNames("btn", color && `btn-${color}`, className);
  return (
    <button className={finalClassName} {...otherProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
