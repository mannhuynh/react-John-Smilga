import React, { useState, useEffect } from "react";

const ShowHide = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<h2>show/hide</h2>
			{show && <Item />}
			<button className="btn" onClick={() => setShow(!show)}>
				Show/Hide
			</button>
			<hr />
		</>
	);
};

const Item = () => {
	const [size, setSize] = useState(window.innerWidth);

	const changeSize = () => setSize(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", changeSize);

		return () => window.removeEventListener("resize", changeSize);
	}, []);

	return (
		<div>
			<h2>Window</h2>
			<h3>size: {size} px</h3>
		</div>
	);
};

export default ShowHide;
