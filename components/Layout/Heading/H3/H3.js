import PropTypes from "prop-types";

const H3 = ({ children }) => {
    return <h3 className="text-lg font-bold mt-2">{children}</h3>;
};
H3.propTypes = {
    children: PropTypes.node.isRequired,
};
H3.defaultProps = {};

export default H3;
