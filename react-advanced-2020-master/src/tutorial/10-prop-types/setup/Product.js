import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
	const imageUrl = image && image.url;
	return (
		<article className="product">
			<img src={imageUrl || defaultImage} alt={name} />
			<h4>{name}</h4>
			<p>${price || 1000}</p>
		</article>
	);
};

Product.propTypes = {
	// image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

Product.defaultProps = {
	name: "default name",
	price: 1000.0,
	image: defaultImage,
};

export default Product;
