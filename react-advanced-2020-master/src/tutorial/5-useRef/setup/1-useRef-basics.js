import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
	const refContainer = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value);
	};

	// useRef will not rerender in useEffect(), don't need dependency array
	useEffect(() => {
		// refContainer.current is now a DOM node
		// refContainer.current.focus();
		console.log(refContainer.current);
	});

	return (
		<>
			<h2>useRef</h2>
			<form action="" className="form" onSubmit={handleSubmit}>
				<div>
					<input type="text" ref={refContainer} />
					<button type="submit">Submit</button>
				</div>
			</form>
			<hr />
		</>
	);
};

export default UseRefBasics;
