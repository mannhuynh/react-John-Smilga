import React, { useState } from "react";

const ErrorExample = () => {
	const [title, setTitle] = useState("random title");
	const handleClick = () => {
		if (title === "random title") {
			setTitle("hello world");
		} else if (title === "hello world") {
			setTitle("random title");
		}
	};

	return (
		<React.Fragment>
			<h2>{title}</h2>
			<button
				className="btn"
				style={{ marginBottom: "10px" }}
				onClick={handleClick}
			>
				Change Title
			</button>

			<hr />
		</React.Fragment>
	);
};

export default ErrorExample;
