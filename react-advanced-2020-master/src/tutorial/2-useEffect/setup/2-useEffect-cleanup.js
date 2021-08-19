import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);

	const handleResize = () => {
		setSize(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<>
			<h2>useEffect cleanup</h2>
			<h3>
				Window Size: <span style={{ fontSize: "40px" }}>{size} px</span>
			</h3>
			<hr style={{ marginBottom: "40px" }} />
		</>
	);
};

export default UseEffectCleanup;
