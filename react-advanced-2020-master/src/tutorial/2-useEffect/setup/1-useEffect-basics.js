import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(0);

	const handleClick = () => {
		setValue(value + 1);
	};

	useEffect(() => {
		if (value >= 1) document.title = `useEffect ${value}`;
	}, [value]);

	return (
		<div>
			<h2>useEffect Basics</h2>
			<h1>{value}</h1>
			<button className="btn" onClick={handleClick}>
				Click
			</button>
			<hr style={{ margin: "10px auto 50px auto" }} />
		</div>
	);
};

export default UseEffectBasics;
