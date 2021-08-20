import React from "react";
import PropTypes from "prop-types";

function testing(props) {
	return <div></div>;
}

testing.propTypes = {
	name: PropTypes.array.isRequired,
};

export default testing;
