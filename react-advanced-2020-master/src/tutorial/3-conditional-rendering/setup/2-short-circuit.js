import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState("");
	const [isError, setIsError] = useState(false);

	const firstValue = text || "hello world";
	const secondValue = text && "hello world";

	return (
		<>
			<h2>short circuit</h2>
			<h3>First value: {firstValue}</h3>
			<h3>Second value: {secondValue}</h3>

			<h4>OR '||' : {text || "TIM"}</h4>
			<h4>AND '&&' : {text && "TIM"}</h4>
			<h4>NOT '!' : {!text && "TIM"}</h4>
			<button className="btn" onClick={() => setIsError(!isError)}>
				Toggle Error
			</button>
			<h3>Display: {isError && "ERROR..."}</h3>
			{isError ? (
				<p>There is an error... </p>
			) : (
				<div>
					<h3>There is no error</h3>
				</div>
			)}
		</>
	);
};

export default ShortCircuit;
