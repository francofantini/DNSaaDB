import PropTypes from "prop-types";

const H4 = ({ children }) => {
    return <p className="text-sm text-gray-700">{children}</p>;
};
H4.propTypes = {
    children: PropTypes.node.isRequired,
};
H4.defaultProps = {};

export default H4;
