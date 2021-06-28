import PropTypes from "prop-types";

const H2 = ({ children }) => {
    return <h2 className="text-2xl font-bold flex justify-start items-center">{children}</h2>;
};

H2.propTypes = {
    children: PropTypes.node.isRequired,
};
H2.defaultProps = {};

export default H2;
