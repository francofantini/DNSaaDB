import PropTypes from "prop-types";
import clsx from "clsx";

const Paper = ({ children, className }) => <div className={clsx("shadow rounded-lg", className)}>{children}</div>;
Paper.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string };
Paper.defaultProps = { className: undefined };

export default Paper;
