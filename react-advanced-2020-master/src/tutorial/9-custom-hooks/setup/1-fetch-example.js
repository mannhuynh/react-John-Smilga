import React from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
	const [loading, products] = useFetch(url);

	const renderProduct = () => {
		return products.map((product) => {
			return (
				<div className="product" key={product.id}>
					{product.fields.name.toUpperCase()}
				</div>
			);
		});
	};
	// console.log(products);
	return (
		<div>
			<h2>Custom Hook</h2>
			<h3>{loading ? "loading..." : "Products:"}</h3>
			{renderProduct()}

			<hr />
		</div>
	);
};

export default Example;
